import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";


@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(private router: Router) {

    }
  
    intercept( request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

      const req = request.clone({

        headers: request.headers.set(
          "Authorization",
          "Basic SGVsbG9XYjphZG1pbg==87"
        ),
      });
  
      return next.handle(req).pipe(
        catchError((error) => {
          if (error.status === 401) {
            this.router.navigateByUrl("/reg");
          }
          return of(error.message);
        })
      );
    }
}