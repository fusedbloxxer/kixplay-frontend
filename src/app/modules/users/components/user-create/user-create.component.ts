import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserInfoValidation } from '../../models/user-info-validation.model';
import { UserInfo } from '../../models/user-info.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  public createUserForm: FormGroup = new FormGroup({});

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onUserCreate(userInfo: UserInfo): void {
    this.authService.register(userInfo).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        this.handleValidationErrors(error);
      },
    });
  }

  private handleValidationErrors(response: HttpErrorResponse): void {
    if (response.error.errors instanceof Array) {
      return;
    }
    const validation: UserInfoValidation = response.error.errors;
    this.handleErrorMessages(validation);
  }

  private handleErrorMessages(validation: UserInfoValidation): void {
    const userInfoGroup: FormGroup | null = this.createUserForm.get(
      'userInfoGroup'
    ) as FormGroup;

    if (validation.Email) {
      userInfoGroup?.get('email')?.setErrors({
        email: true,
        message: validation.Email.join(' '),
      });
    }

    if (validation.UserName) {
      userInfoGroup?.get('username')?.setErrors({
        username: true,
        message: validation.UserName.join(' '),
      });
    }

    if (validation.Password) {
      userInfoGroup?.get('password')?.setErrors({
        password: true,
        message: validation.Password.join(' '),
      });
    }

    if (validation.FirstName) {
      userInfoGroup?.get('firstName')?.setErrors({
        name: true,
        message: validation.FirstName.join(' '),
      });
    }

    if (validation.LastName) {
      userInfoGroup?.get('lastName')?.setErrors({
        name: true,
        message: validation.LastName.join(' '),
      });
    }

    if (validation.DateOfBirth) {
      userInfoGroup?.get('dateOfBirth')?.setErrors({
        dob: true,
        message: validation.DateOfBirth.join(' '),
      });
    }
  }
}
