import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-book',
  templateUrl: './pagination-book.component.html',
  styleUrls: ['./pagination-book.component.css']
})
export class PaginationBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let btn = window.location.href;
    console.log(btn.slice(btn.length - 1));
  }

  onActive(page: number): string {
    let btn = window.location.href;
    return Number(btn.slice(btn.length - 1)) == page ? 'active' : 'notactive';
  }

}
