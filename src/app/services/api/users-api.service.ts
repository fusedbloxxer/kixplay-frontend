import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { UserModel } from 'src/app/modules/users/models/user.model';
import { UserInfoModel } from 'src/app/modules/users/models/user-info.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  constructor(private http: HttpClient) {}

  public loginUser(email: string, pass: string): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.baseApiServer}/users/login`, {
      password: pass,
      email,
    });
  }

  public createUser(userInfo: UserInfoModel): Observable<UserModel> {
    return this.http.post<UserModel>(
      `${environment.baseApiServer}/users/register`,
      userInfo
    );
  }

  public updateUser(userId: string, userInfo: UserInfoModel): Observable<UserModel> {
    return this.http.put<UserModel>(
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
