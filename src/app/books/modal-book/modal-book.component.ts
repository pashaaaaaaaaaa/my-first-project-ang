import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { WrSets } from '../table-books/table-book';

@Component({
  selector: 'app-modal-book',
  templateUrl: './modal-book.component.html',
  styleUrls: ['./modal-book.component.css']
})
export class ModalBookComponent implements OnInit {

  constructor( 
    public dialogRef: MatDialogRef<ModalBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WrSets,) {

      console.log(data)
     }

  onNoClick(): void {
     this.dialogRef.close();
    }   

  ngOnInit(): void {
  }

}

