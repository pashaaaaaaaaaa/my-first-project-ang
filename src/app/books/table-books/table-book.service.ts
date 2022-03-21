import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from '../../message.service';
import { SetOne } from './table-book';

@Injectable({
  providedIn: 'root'
})
export class TableBookService {

  urlOne: string = 'api/setOne';
  urlTwo: string = 'api/setTwo';
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  getSetOne(): Observable<SetOne[]> {
    return this.http.get<SetOne[]>(this.urlOne).pipe(
        tap(_ => this.log('fetched first set data of books')),
        catchError(this.handleError<SetOne[]>('getSetOne', []))
    )
  }

  getSetTwo(): Observable<SetOne[]> {
    return this.http.get<SetOne[]>(this.urlTwo).pipe(
        tap(_ => this.log('fetched second set data of books')),
        catchError(this.handleError<SetOne[]>('getSetTwo', []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`Table-books: ${message}`);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';
// import {  bookCard, BooksAllData } from './table-book';

// @Injectable({
//   providedIn: 'root'
// })
// export class  serviceBook {
//   private booksUrl = 'api/dataBook'; 

//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     })
//   }
//   //============================ делала как в туториале 6 часть 

//   constructor(private http: HttpClient) { }

//   getBooksReg(): Observable<BooksAllData> {
//     return this.http.get<BooksAllData>(this.booksUrl)
//       .pipe(
//         tap(_ => console.log('fetched book')),
//       )
//   }
//   getBookIdRow(id: number): Observable<bookCard> {
//     const url = `${this.booksUrl}/set2/data/${id}`;
//     return this.http.get<bookCard>(url).pipe(
//       tap(_ => console.log(`fetched id=${id}`)),
//       catchError(this.handleError<bookCard>(`getBookIdRow id=${id}`))
//     )
//  }
//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(error);
//       console.log(`${operation} failed: ${error.message}`);
//       return of(result as T);
//     }
//   }
// }
