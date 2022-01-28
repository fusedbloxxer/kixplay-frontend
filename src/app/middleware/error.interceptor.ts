import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        const errorResponse = httpErrorResponse.error;

        this.snackBar.open(this.extractError(errorResponse), 'OKAY', {
          duration: 3000,
        });

        return throwError(() => httpErrorResponse);
      })
    );
  }

  private extractError(errorResponse: any): string {
    if (errorResponse.errors instanceof Array) {
      return errorResponse.errors?.[0] || 'An error occurred.';
    }
    return errorResponse?.title || 'An error occurred';
  }
}
