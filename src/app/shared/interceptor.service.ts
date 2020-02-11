import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private api: ApiService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'a5ceU_1231n7Z2tsOpOt9G_hYHPmVZu4FYUL';
    req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
    });
    const exp = /^(http:|https:)/;
    if (!exp.exec(req.url)) {
      const url = 'https://gorest.co.in/public-api';

      req = req.clone({
        url: url + req.url
      });
    }
    return next.handle(req);
  }

}
