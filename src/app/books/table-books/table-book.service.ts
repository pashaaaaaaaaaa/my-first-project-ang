import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from '../../message.service';
import { WrSets } from './table-book';
import { concat } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TableBookService {

  urlOne: string = 'api/setOne';
  urlTwo: string = 'api/setTwo';
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  getSets(): Observable<WrSets[]> {
    return concat(
        this.http.get<WrSets[]>(this.urlOne).pipe(),
        this.http.get<WrSets[]>(this.urlTwo).pipe()
      ).pipe(
        tap(_ => this.log('fetched set data of books')),
        catchError(this.handleError<WrSets[]>('getSets', []))
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
