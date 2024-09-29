import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('between');
    const API = '02160754-729f-49ba-893c-045c9c361417'
    const modifiedRequest = request.clone({
      setHeaders:{
        'Authorization': ` ${API}`
      }
    })
    return next.handle(modifiedRequest);
  }
}
