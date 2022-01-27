import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Role } from '../models/role.model';
import { User } from '../models/user.model';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private authService: AuthenticationService) {}

  public hasRole(role: Role): Observable<boolean> {
    // Check for authentication
    if (!this.authService.isLoggedIn()) {
      return of(false);
    }

    // Check that the user has the required role
    return of(this.getUserRoles().includes(role));
  }

  public hasAnyRole(roles: Role[]): Observable<boolean> {
    // Check for authentication
    if (!this.authService.isLoggedIn()) {
      return of(false);
    }

    // Check that the user has at least one required role
    return of(this.getUserRoles().some(role => roles.includes(role)))
  }

  public hasAllRoles(roles: Role[]): Observable<boolean> {
    // Check for authentication
    if (!this.authService.isLoggedIn()) {
      return of(false);
    }

    // Check that the user has at least one required role
    return of(roles.every(role => this.getUserRoles().includes(role)))
  }

  private getUserRoles(): Role[] {
    // Check for existance
    if (!this.authService.currentUserValue) {
      return [];
    }

    // Get the roles
    return this.authService.currentUserValue.claims.roles;
  }
}
