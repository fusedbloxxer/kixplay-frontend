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
import { UserClaims } from '../models/user-claims.model';

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
        if (!tokenRoutes.find((route) => req.url.match(route))) {
          return event;
        }

        // Get the response
        const response = event as HttpResponse<any>;

        // Ignore failed requests
        if (response.status !== 200) {
          return event;
        }

        // Get the custom response
        const userResponse = response as HttpResponse<User>;
        const payload: string =
          userResponse.body?.token.split('.')?.[1] ?? '{}';

        // Decode the token and add the claims
        const claims: UserClaims = JSON.parse(atob(payload));

        // Clone the body and add the claims
        return event.clone({
          body: { ...userResponse.body, claims },
        });
      })
    );
  }
}
