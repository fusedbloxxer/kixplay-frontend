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
import { UserModel } from '../modules/users/models/user.model';
import { UserClaimsModel } from '../modules/users/models/user-claims.model';

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
        const methods = ['POST', 'PUT'];
        if (!(event instanceof HttpResponse) || !methods.includes(req.method)) {
          return event;
        }

        // Match only on register/login
        const tokenRoutes = [
          `${environment.baseApiServer}/users/login`,
          `${environment.baseApiServer}/users/register`,
          `${environment.baseApiServer}/users/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/update`,
        ];

        // Match the current route
        if (!tokenRoutes.find((route) => req.url.match(route))) {
          return event;
        }

        // Get the response
        const response = event as HttpResponse<any>;

        // Ignore failed requests
        const successCodes = [200, 201];
        if (!successCodes.includes(response.status)) {
          return event;
        }

        // Get the custom response
        const userResponse = response as HttpResponse<UserModel>;
        const payload: string =
          userResponse.body?.token.split('.')?.[1] ?? '{}';

        // Decode the token and add the claims
        const claims: UserClaimsModel = JSON.parse(atob(payload));

        // Clone the body and add the claims
        return event.clone({
          body: { ...userResponse.body, claims },
        });
      })
    );
  }
}
