import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";


@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(private router: Router) {

    }
  
    intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        const cloneRequest = request.clone({
                headers: request.headers.set('X-Header', 'ты кто такой')
        });
            
        console.log(cloneRequest)

  
      return next.handle(cloneRequest).pipe(
        catchError((error) => {
          if (error.status === 401) {
            this.router.navigateByUrl("/reg");
          }
          return of(error.message);
        })
      );
    }
}