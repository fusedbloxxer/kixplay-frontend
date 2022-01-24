import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { passwordValidator } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  userLoginForm: FormGroup = this.initForm();
  showPass: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  initForm(): FormGroup {
    return this.fb.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      pass: ['', { validators: [Validators.required, passwordValidator()] }],
    });
  }

  onSubmit(): void {
    if (this.userLoginForm.invalid) {
      return;
    }

    this.authService
      .login(
        this.userLoginForm.get('email')?.value,
        this.userLoginForm.get('pass')?.value
      )
      .pipe(first())
      .subscribe({
        next: (user: User) => {
          console.log(user);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
  }
}
