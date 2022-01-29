import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserInfo } from 'src/app/modules/users/models/user-info.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  constructor(private http: HttpClient) {}

  public loginUser(email: string, pass: string): Observable<User> {
    return this.http.post<User>(`${environment.baseApiServer}/users/login`, {
      password: pass,
      email,
    });
  }

  public createUser(userInfo: UserInfo): Observable<User> {
    return this.http.post<User>(
      `${environment.baseApiServer}/users/register`,
      userInfo
    );
  }

  public updateUser(userId: string, userInfo: UserInfo): Observable<User> {
    return this.http.put<User>(
      `${environment.baseApiServer}/users/${userId}/update`,
      userInfo
    );
  }

  public deleteUser(userId: string): Observable<void> {
    return this.http.delete<void>(
      `${environment.baseApiServer}/users/${userId}/remove`
    );
  }
}
