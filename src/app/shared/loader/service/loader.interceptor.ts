import { LoaderService } from './loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.showLoader();
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.hideLoader();
          }
        },
        (err: any) => {
          console.log(err);
          this.hideLoader();
        }
      )
    );
  }

  /**
   * @function showLoader
   * @description trigger show loader
   */
  public showLoader() {
    this.loaderService.showBlockLoader();
  }

  /**
   * @function hideLoader
   * @description trigger hide loader
   */
  public hideLoader() {
    this.loaderService.hideBlockLoader();
  }
}
