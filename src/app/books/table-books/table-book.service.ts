import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from '../../message.service';
import { SetOne, WrSets, WrSetsApi } from './table-book';
import { concat } from 'rxjs';
import { map } from '@firebase/util';


@Injectable({
  providedIn: 'root'
})
export class TableBookService {

  urlOne: string = 'http://localhost:4200/api';
  urlTwo: string = 'http://localhost:4200/api';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

// =========пробный вариант ============//

  // getOneSet(){
  //   const data = this.http.get<SetOne[]>
  //   (`${this.urlOne}/books.json`, {
  //     headers:{Get :'Set 1'}
  //   })
  //  return data.set1.data
  // }

  // getSets(): Observable<WrSets[]> {
  //   return concat(
  //       this.http.get<WrSets[]>(this.urlOne),
  //       this.http.get<WrSets[]>(this.urlTwo)
  //     ).pipe(
  //       tap(_ => this.log('fetched set data of books')),
  //       catchError(this.handleError<WrSets[]>('getSets', []))
  //     )
  // }
  getSets(): Observable<WrSetsApi> {
    return this.http.get<WrSetsApi>(`${this.urlOne}/books.json`)
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
