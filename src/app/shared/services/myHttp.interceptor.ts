import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class HttpIntercaptor implements HttpInterceptor {
  constructor(private _api: ApiService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._api.getToken();
    if (this._api.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    const exp = /^(http:|https:)/;
    if (!exp.exec(request.url)) {
      const url = 'https://cors-anywhere.herokuapp.com/https://reqres.in/api';

      request = request.clone({
        url: url + request.url
      });
    }
    return next.handle(request);
  }
}
}



// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
//
// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // add authorization header with jwt token if available
//     let token = "WQKaOSk1erNo2c6gjnAuLafXSdL8ugFmmoxc";
//
//     if (token) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: "Bearer " + token
//         }
//       });
//     }
//     const exp = /^(http:|https:)/;
//     if(!exp.exec(request.url)){
//       const url = "https://gorest.co.in/public-api";
//
//       request = request.clone({
//         url: url + request.url
//       });
//     }
//     return next.handle(request);
//   }
// }
