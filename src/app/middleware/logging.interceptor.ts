import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Sending request: ', request);
    return next.handle(request).pipe(
      tap({
        next: (res) => {
          if (res instanceof HttpResponse) {
            console.log('Response: ', res);
          }
        },
        error: (err) => {
          console.error('Error: ', err);
        },
        complete: () => {
          console.log('Response has completed.');
        },
      })
    );
  }
}
