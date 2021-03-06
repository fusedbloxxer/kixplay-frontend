import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, throwError } from 'rxjs';
import { UserModel } from '../modules/users/models/user.model';
import { UserInfoModel } from '../modules/users/models/user-info.model';
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
  private currentUserSubject: BehaviorSubject<UserModel | null | undefined>;

  /**
   * Observe the current status of the users.
   */
  public currentUser$: Observable<UserModel | undefined | null>;

  constructor(
    private localStorageService: LocalStorageService,
    private usersService: UsersApiService
  ) {
    this.currentUserSubject = new BehaviorSubject(
      localStorageService.getItem<UserModel>(AuthenticationService.CURRENT_USER)
    );
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  /**
   * Get the current user from the local storage.
   * Will return null or undefined if the cache expired.
   */
  public get currentUserValue(): UserModel | null | undefined {
    const curentUser = this.localStorageService.getItem<UserModel>(
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
  public login(email: string, pass: string): Observable<UserModel> {
    return this.usersService.loginUser(email, pass).pipe(
      tap((user: UserModel) => {
        this.updateLocalStorage(user);
      })
    );
  }

  /**
   * Register a new user.
   * Cache the info and token if successful.
   */
  public register(userInfo: UserInfoModel): Observable<UserModel> {
    return this.usersService.createUser(userInfo).pipe(
      tap((user: UserModel) => {
        this.updateLocalStorage(user);
      })
    );
  }

  /**
   * Update the user settings.
   * Update the local token with the new one.
   */
  public update(userInfo: UserInfoModel): Observable<UserModel> {
    if (!this.currentUserValue) {
      return throwError(() => 'Invalid user claims.');
    }
    return this.usersService
      .updateUser(this.currentUserValue.claims.nameid, userInfo)
      .pipe(
        tap((user: UserModel) => {
          this.updateLocalStorage(user);
        })
      );
  }

  /**
   * Delete the current user.
   * Remove the token and logout.
   */
  public delete(userId: string): Observable<void> {
    return this.usersService.deleteUser(userId).pipe(tap(() => this.logout()));
  }

  /**
   * Remove the user from the local storage.
   */
  public logout() {
    this.localStorageService.removeItem(AuthenticationService.CURRENT_USER);
    this.currentUserSubject.next(null);
  }

  /**
   * Update the curent session info using local storage.
   */
  private updateLocalStorage(user: UserModel): void {
    this.currentUserSubject.next(user);
    this.localStorageService.setItem(
      AuthenticationService.CURRENT_USER,
      user,
      user.claims.exp * 1_000
    );
  }
}
