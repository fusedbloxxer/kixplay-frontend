import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { RoleModel } from '../modules/users/models/role.model';
import { AuthorizationService } from '../services/authorization.service';

export enum Rule {
  AnyRole = 'AnyRole',
  AllRoles = 'AllRoles',
}

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private authorizationService: AuthorizationService,
    private snackBar: MatSnackBar
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAuthorized(route.data['rule'], route.data['roles']).pipe(
      tap((status: boolean) => {
        if (!status) {
          this.snackBar.open('You do not have the necessary role.', 'DISMISS', {
            duration: 3000,
          });
        }
      })
    );
  }

  private isAuthorized(rule: Rule, roles: RoleModel[]): Observable<boolean> {
    switch (rule) {
      case Rule.AnyRole:
        return this.authorizationService.hasAnyRole(roles);
      case Rule.AllRoles:
        return this.authorizationService.hasAllRoles(roles);
      default:
        throw new Error('Invalid rule.');
    }
  }
}
