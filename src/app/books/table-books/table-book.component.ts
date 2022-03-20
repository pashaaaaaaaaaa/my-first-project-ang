// import { Component, OnInit } from '@angular/core';
// import { TableBookService } from './table-book.service';
// import { SetOne} from './table-book'
// @Component({
//   selector: 'app-table-book',
//   templateUrl: './table-book.component.html',
//   styleUrls: ['./table-book.component.css']
// })
// export class TableBookComponent implements OnInit {

//   constructor(private tableBookService: TableBookService) {}

//   table: SetOne[] = [];
//   total: number = 0
//   displayedColumns: string[] = ['id', 'title', 'qtyRelease'];
//   description: string | null = null;

//   getSetOne() {
//     this.tableBookService.getSetOne()
//         .subscribe(table => this.table = table);
//   }

//   getSetTwo(id: number) {
//     this.tableBookService.getSetTwo()
//         .subscribe(resp => this.description = resp[id].description)
//   }

//   calculateTotal(): void {
//     for (let i = 0; i < this.table.length; i++) {
//       this.total += this.table[i].qtyRelease
//     }
//   }

//   onRowClick(data: SetOne) {
//     this.getSetTwo(data.id - 1);
//   }

// // scroll() {
// //     console.log(this.description)
// //     let el = document.getElementById('cardAnchor');
// //     el?.scrollIntoView({ behavior: "smooth"});
// // }

//   ngOnInit(): void {
//     this.getSetOne()
//   }

//   ngDoCheck(): void {
//     this.total = 0
//     this.calculateTotal()
//   }

// }
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { tableBook } from './table-book';
import { serviceBook } from './table-book.service'


@Component({
  selector: 'app-table-books',
  templateUrl: './table-book.component.html',
  styleUrls: ['./table-book.component.css']
})

export class TableBooksComponent implements OnInit {
  BookInfoPage: tableBook[] = [];
  displayedColumns: string[] = ['id', 'title', 'qtyRelease'];
  dataSource = this.BookInfoPage;
  onClickRow?: tableBook;
  total: number = 0

  constructor(private bookService: serviceBook) {}

  getBooksReg(): void {
    this.bookService.getBooksReg().pipe(
      map(elem => {
        const setDescr = elem.set1.data;
        const setEdit = elem.set2.data;
        return ({setDescr, setEdit});
      }),
      map(({setDescr, setEdit}) => {

        const BookInfoPage: tableBook[] = []
        for (let i = 0; i < setDescr.length; i++) {
          if (setDescr[i].id===setEdit[i].id){
          BookInfoPage[i] = {
            id: setDescr[i].id,
            title: setDescr[i].title,
            description: setDescr[i].description,
            releaseDate: setEdit[i].releaseDate,
            qtyRelease: setEdit[i].qtyRelease
          }
        }
      }
        return  BookInfoPage;
      
      })
    ).subscribe(elem => this.BookInfoPage = elem)
  }
  getTotalCount(): number {
    return this.BookInfoPage.map(book => book.qtyRelease).reduce(( temp, value) => {
      return   temp + value;
    }, 0)
  }
  description(){}
  ngOnInit(): void {
    this.getBooksReg()
  }
 
}