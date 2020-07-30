import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor(private token:TokenStorageService,private router:Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url);
    let authReq=req;
    if(this.token.getToken()!=null){
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken())});
    }
      return next.handle(authReq).pipe(tap(
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
           
            if (err.status === 401) {
              this.router.navigate(['home']);
            }
          }
        }
      ));
  }
}
