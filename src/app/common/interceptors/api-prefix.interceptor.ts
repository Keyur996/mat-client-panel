import { environment } from './../../../environments/environment';
import { Injectable, isDevMode } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!/^(http|https):/i.test(request.url) && isDevMode()) {
      request = request.clone({ url: environment.serverUrl + request.url });
    }
    return next.handle(request);
  }
}
