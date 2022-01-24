import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
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
}
