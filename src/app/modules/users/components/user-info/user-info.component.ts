import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dobValidator } from 'src/app/validators/dob.validator';
import { nameValidator } from 'src/app/validators/name.validator';
import { passwordValidator } from 'src/app/validators/password.validator';
import { usernameValidator } from 'src/app/validators/username.validator';
import { UserInfo } from '../../models/user-info.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  public hidePassword: boolean = true;
  public userInfoForm: FormGroup;

  @Input('title')
  public title!: string;

  @Input('parentForm')
  public parentForm!: FormGroup;

  @Output('onUserInfoSubmit')
  public userInfoSubmit: EventEmitter<UserInfo> = new EventEmitter();

  constructor(private router: Router, private fb: FormBuilder) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.userInfoForm = this.initForm(state?.['email'], state?.['pass']);
  }

  ngOnInit(): void {
    this.parentForm.addControl('userInfoGroup', this.userInfoForm);
    this.userInfoForm.setParent(this.parentForm);
  }

  public onUserInfoSubmit(): void {
    this.userInfoSubmit.emit({
      email: this.userInfoForm.get('email')?.value,
      username: this.userInfoForm.get('username')?.value,
      password: this.userInfoForm.get('password')?.value,
      firstName: this.userInfoForm.get('firstName')?.value,
      lastName: this.userInfoForm.get('lastName')?.value,
      dateOfBirth: this.userInfoForm.get('dateOfBirth')?.value,
    });
  }

  private initForm(
    email: string | undefined,
    pass: string | undefined
  ): FormGroup {
    return this.fb.group({
      email: [
        email ?? '',
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      username: [
        '',
        {
          validators: [Validators.required, usernameValidator()],
        },
      ],
      password: [
        pass ?? '',
        {
          validators: [Validators.required, passwordValidator()],
        },
      ],
      firstName: [
        '',
        {
          validators: [nameValidator()],
        },
      ],
      lastName: [
        '',
        {
          validators: [nameValidator()],
        },
      ],
      dateOfBirth: [
        '',
        {
          validators: [Validators.required, dobValidator()],
        },
      ],
    });
  }
}
