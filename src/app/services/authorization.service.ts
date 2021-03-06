import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { RoleModel } from '../modules/users/models/role.model';
import { UserModel } from '../modules/users/models/user.model';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private authService: AuthenticationService) {}

  public hasRole(role: RoleModel): Observable<boolean> {
    // Check for authentication
    if (!this.authService.isLoggedIn()) {
      return of(false);
    }

    // Check that the user has the required role
    return of(this.getUserRoles().includes(role));
  }

  public hasAnyRole(roles: RoleModel[]): Observable<boolean> {
    // Check for authentication
    if (!this.authService.isLoggedIn()) {
      return of(false);
    }

    // Check that the user has at least one required role
    return of(this.getUserRoles().some(role => roles.includes(role)))
  }

  public hasAllRoles(roles: RoleModel[]): Observable<boolean> {
    // Check for authentication
    if (!this.authService.isLoggedIn()) {
      return of(false);
    }

    // Check that the user has at least one required role
    return of(roles.every(role => this.getUserRoles().includes(role)))
  }

  private getUserRoles(): RoleModel[] {
    // Check for existance
    if (!this.authService.currentUserValue) {
      return [];
    }

    // In case the user has no roles
    if (!this.authService.currentUserValue.claims.role) {
      return [];
    }

    // In case the user has a single role
    if (typeof(this.authService.currentUserValue.claims.role) === "string") {
      return [this.authService.currentUserValue.claims.role];
    }

    // Get the roles
    return this.authService.currentUserValue.claims.role;
  }
}
