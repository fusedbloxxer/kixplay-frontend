import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user.model';
import { UsersApiService } from './api/users-api.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  static CURRENT_USER: string = 'currentUser';

  /**
   * Use the subject to emit new states for the user status.
   */
  private currentUserSubject: BehaviorSubject<User | null | undefined>;

  /**
   * Observe the current status of the users.
   */
  public currentUser$: Observable<User | undefined | null>;

  constructor(
    private localStorageService: LocalStorageService,
    private usersService: UsersApiService
  ) {
    this.currentUserSubject = new BehaviorSubject(
      localStorageService.getItem<User>(AuthenticationService.CURRENT_USER)
    );
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  /**
   * Get the current user from the local storage.
   * Will return null or undefined if the cache expired.
   */
  public get currentUserValue(): User | null | undefined {
    const curentUser = this.localStorageService.getItem<User>(
      AuthenticationService.CURRENT_USER
    );
    this.currentUserSubject.next(curentUser);
    return this.currentUserSubject.value;
  }

  /**
   * Check the expiration of the current session
   * and return true if it is still valid.
   */
  public isLoggedIn(): boolean {
    return !!this.currentUserValue;
  }

  /**
   * Login the user by calling the UsersAPI login.
   * Cache the user info and the token.
   */
  login(email: string, pass: string): Observable<User> {
    return this.usersService.loginUser(email, pass).pipe(
      tap((user: User) => {
        this.currentUserSubject.next(user);
        this.localStorageService.setItem(
          AuthenticationService.CURRENT_USER,
          user,
          user.claims.exp * 1_000
        );
      })
    );
  }

  /**
   * Remove the user from the local storage.
   */
  logout() {
    this.localStorageService.removeItem(AuthenticationService.CURRENT_USER);
    this.currentUserSubject.next(null);
  }
}
