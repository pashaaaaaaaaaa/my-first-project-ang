import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of, throwError } from "rxjs";
import { AuthService } from "./auth.service";
import { AngularFireAuth } from "@angular/fire/compat/auth";


@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    accessToken: string | undefined;

    constructor(private router: Router, private authService: AuthService, public afAuth: AngularFireAuth) {}
  
    intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.accessToken = this.authService.getCredentials()
      // console.log('rly??')
      // console.log(this.accessToken)
      if (this.accessToken == undefined) this.accessToken = 'guest'
  
      const cloneRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.accessToken)
      });
      
      console.log(cloneRequest)
  
      return next.handle(cloneRequest).pipe(
        
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401) {
            this.router.navigate(['/reg']);
          }
          console.log(error);
          return throwError(error);
        })
      )
    

      // const req = request.clone({

      //   headers: request.headers.set(
      //     "Authorization",
      //     "Basic SGVsbG9XYjphZG1pbg=="
      //   ),
      // });
  
      // return next.handle(req).pipe(
      //   catchError((error) => {
      //     if (error.status === 401) {
      //       this.router.navigateByUrl("/reg");
      //     }
      //     return of(error.message);
      //   })
      // );
    }
}