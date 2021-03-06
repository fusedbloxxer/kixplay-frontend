import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/modules/users/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserInfoModel } from '../../models/user-info.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent implements OnInit {
  public userUpdateForm: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  public onUserUpdate(userInfo: UserInfoModel): void {
    this.authService.update(userInfo).subscribe({
      next: () => {
        this.snackBar.open('Information updated successfully', 'ACCEPT', {
          duration: 3000,
        });
      },
    });
  }

  public onUserDelete(user: UserModel | null | undefined): void {
    if (!user) {
      return;
    }
    this.authService.delete(user.claims.nameid).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
    });
  }
}
