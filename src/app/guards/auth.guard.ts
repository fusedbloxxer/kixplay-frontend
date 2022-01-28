import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (route.data['onlyAnon']) {
      return this.onlyAnonymousUsers();
    }
    return this.onlyAuthenticatedUsers();
  }

  private onlyAnonymousUsers(): boolean {
    if (!this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate([
      'profile',
      {
        relativeTo: '/users',
      },
    ]);

    return false;
  }

  private onlyAuthenticatedUsers(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
