import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<unknown>) => {
        // Ignore all events besides responses
        if (!(event instanceof HttpResponse) || req.method !== 'POST') {
          return event;
        }

        // Match only on register/login
        const tokenRoutes = [
          `${environment.baseApiServer}/users/login`,
          `${environment.baseApiServer}/users/register`,
        ];

        // Match the current route
        if (!tokenRoutes.find(route => req.url.match(route))) {
          return event;
        }

        // Get the response
        const response = event as HttpResponse<any>;

        // Ignore failed requests
        if (response.status !== 200) {
          return event;
        }

        // Get the custom response
        debugger;
        const userResponse = response as HttpResponse<User>;

        debugger;
        return event;
      })
    );
  }
}
