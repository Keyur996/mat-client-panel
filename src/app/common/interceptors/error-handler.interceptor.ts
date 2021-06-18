import { GlobalErrorHandler } from '../global-error-handler.class';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retryWhen, take, concat, mergeMap } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  public constructor(private errorHandle: GlobalErrorHandler) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      retryWhen((error) => {
        return error.pipe(
          mergeMap((errorData: any) => {
            // retry only if error status is 500
            return errorData.status === 500
              ? of(errorData)
              : throwError(errorData);
          }),
          take(2),
          concat(throwError(error))
        );
      }),
      catchError((error) => {
        this.errorHandle.handleError(error);
        throw error;
      })
    );
  }
}
