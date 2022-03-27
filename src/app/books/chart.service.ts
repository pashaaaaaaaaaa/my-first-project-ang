import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WrSets } from './table-books/table-book';

@Injectable({
  providedIn: 'root'
})
export class ChartTransferService {

  data: WrSets[] | undefined;

  constructor(private router:Router) { }

  saveData(data: WrSets[]) {
    this.data = data
  }

  getData() {
    return this.data
  }
}
