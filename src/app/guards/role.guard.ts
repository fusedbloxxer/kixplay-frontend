import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

export enum Rule {
  AnyRole = 'AnyRole',
  AllRoles = 'AllRoles',
}

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authorizationService: AuthorizationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    switch (route.data['rule']) {
      case Rule.AnyRole:
        return this.authorizationService.hasAnyRole(route.data['roles']);
      case Rule.AllRoles:
        return this.authorizationService.hasAllRoles(route.data['roles']);
      default:
        throw new Error('Invalid rule.');
    }
  }
}
