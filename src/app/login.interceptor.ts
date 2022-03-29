import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()

export class LoginInterceptor implements HttpInterceptor {
  constructor(private router: Router) {

  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      headers: request.headers.set(
        "Authorization",
        "Basic SGVsbG9XYjphZG1pbg=="
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