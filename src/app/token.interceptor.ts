import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        console.log(req, "this")

        const reqClone = req.clone({
            headers: req.headers.set('X-Header', 'bababooey ' + req.url)
          });

        return next.handle(reqClone)
    }
}