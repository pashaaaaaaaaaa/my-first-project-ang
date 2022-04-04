import { TableBookService } from "./table-book.service";
import { TableBooksComponent } from "./table-book.component";
import {inject, TestBed} from "@angular/core/testing";
import { RouterTestingModule} from "@angular/router/testing";
import { async } from "@angular/core/testing"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from "@angular/common/http";



describe('TableBookService', () => {
    let service: TableBookService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule],
        declarations: [TableBooksComponent],
        providers: [TableBooksComponent, HttpClient]
      })
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
      service = TestBed.inject(TableBookService);
    })  
    it('создание компонента', inject([TableBookService],(service:TableBookService) => {
        expect(service).toBeTruthy();
    }))
    it('should get books', inject(
        [HttpTestingController, TableBookService],
        (httpMock: HttpTestingController, service: TableBookService) => {
          const mockBooks = {
            "page1": "Harry Potter and the Order of the Phoenix",
            "page2": "The Hunger Games",
            "page3": "The Book Thief"
          }
  
          service.getSets().subscribe(data => {
            expect(data.set1.data[0].title).toEqual(mockBooks.page1);
            expect(data.set1.data[1].title).toEqual(mockBooks.page3);
          });
  
          const mockReq = httpMock.expectOne(service.urlOne+ '/books.json');
  
          expect(mockReq.cancelled).toBeFalsy();
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(mockBooks);
  
          httpMock.verify();
        }
      )
    );
})    