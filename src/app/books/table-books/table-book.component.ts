import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartTransferService } from '../chart.service';
import { ModalBookComponent } from '../modal-book/modal-book.component';
import { SetOne, SetTwo } from './table-book';
import { WrSets } from './table-book';
import { TableBookService } from './table-book.service';

@Component({
  selector: 'app-table-book',
  templateUrl: './table-book.component.html',
  styleUrls: ['./table-book.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableBooksComponent implements OnInit {
  expandedElement: SetOne | null = null;
  
  constructor(
    private tableBooksService: TableBookService,
    private chartTransfer: ChartTransferService,
    public dialog: MatDialog
    ) {
    
  }

  table: WrSets[] = [];
  tmp: WrSets[] = []
  total: number = 0
  displayedColumns: string[] = ['id', 'title', 'qtyRelease'];
  description: string | null = null;

  getSets(): void {
    this.tableBooksService.getSets()
        .subscribe(table => {
          this.tmp = table
          this.addStream()
        })
  }

  addStream(): void {
    if (this.table.length != 0) {
      this.table.map(a => Object.assign(a, this.tmp.find((b: SetTwo) => b.id == a.id)));
    }
    else {
      this.table = this.tmp
    }
  }

  calculateTotal(): void {
    this.total = 0
    for (let i = 0; i < this.table.length; i++) {
      this.total += this.table[i].qtyRelease
    }
  }

  openDialog(): void {
    this.chartTransfer.saveData(this.table)
    console.log("opened dialog")
    const dialogRef = this.dialog.open(ModalBookComponent, {
      data: this.table,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.getSets()
  }

  ngDoCheck(): void {
    this.calculateTotal()
  }
}
