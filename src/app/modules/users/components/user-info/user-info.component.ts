import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/modules/users/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { dobValidator } from 'src/app/validators/dob.validator';
import { nameValidator } from 'src/app/validators/name.validator';
import { passwordValidator } from 'src/app/validators/password.validator';
import { usernameValidator } from 'src/app/validators/username.validator';
import { UserInfoModel } from '../../models/user-info.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  public hidePassword: boolean = true;
  public userInfoForm!: FormGroup;
  private navState:
    | {
        [k: string]: any;
      }
    | undefined;

  @Input('title')
  public title!: string;

  @Input('required')
  public required: boolean = true;

  @Input('parentForm')
  public parentForm!: FormGroup;

  @Input('canDelete')
  public canDelete: boolean = false;

  @Input('prefill')
  public prefill: boolean = false;
  public userInfoPrefill: UserInfoModel = {
    email: undefined,
    userName: undefined,
    password: undefined,
    dateOfBirth: undefined,
    lastName: undefined,
    firstName: undefined,
  };

  @Output('onUserDelete')
  public userDelete: EventEmitter<UserModel | null | undefined> = new EventEmitter();

  @Output('onUserInfoSubmit')
  public userInfoSubmit: EventEmitter<UserInfoModel> = new EventEmitter();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.navState = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    // Load user info
    if (this.prefill) {
      Object.assign(this.userInfoPrefill, this.authService.currentUserValue);
    }

    // Initialize the form
    this.userInfoForm = this.initForm(
      this.navState?.['email'],
      this.navState?.['pass']
    );

    // Add this form to the parent
    this.parentForm.addControl('userInfoGroup', this.userInfoForm);
    this.userInfoForm.setParent(this.parentForm);
  }

  public onUserDeleteAccount(): void {
    this.userDelete.emit(this.authService.currentUserValue);
  }

  public onUserInfoSubmit(): void {
    this.userInfoSubmit.emit({
      email: this.userInfoForm.get('email')?.value || null,
      userName: this.userInfoForm.get('username')?.value || null,
      password: this.userInfoForm.get('password')?.value || null,
      firstName: this.userInfoForm.get('firstName')?.value || null,
      lastName: this.userInfoForm.get('lastName')?.value || null,
      dateOfBirth: this.userInfoForm.get('dateOfBirth')?.value || null,
    });
  }

  private requiredValidator(): ValidatorFn {
    return this.required ? Validators.required : Validators.nullValidator;
  }

  private initForm(
    email: string | undefined,
    pass: string | undefined
  ): FormGroup {
    return this.fb.group({
      email: [
        email ?? this.userInfoPrefill.email,
        {
          validators: [, Validators.email],
        },
      ],
      username: [
        this.userInfoPrefill.userName,
        {
          validators: [this.requiredValidator(), usernameValidator()],
        },
      ],
      password: [
        pass ?? this.userInfoPrefill.password,
        {
          validators: [this.requiredValidator(), passwordValidator()],
        },
      ],
      firstName: [
        this.userInfoPrefill.firstName,
        {
          validators: [nameValidator()],
        },
      ],
      lastName: [
        this.userInfoPrefill.lastName,
        {
          validators: [nameValidator()],
        },
      ],
      dateOfBirth: [
        this.userInfoPrefill.dateOfBirth,
        {
          validators: [this.requiredValidator(), dobValidator()],
        },
      ],
    });
  }
}
