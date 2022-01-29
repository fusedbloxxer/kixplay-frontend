import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserCreateComponent,
    UserInfoComponent,
    UserUpdateComponent,
    UserSettingsComponent,
    UserDashboardComponent,
  ],
  imports: [SharedModule, UsersRoutingModule],
})
export class UsersModule {}
