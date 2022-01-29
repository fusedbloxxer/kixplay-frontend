import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { MatDividerModule } from '@angular/material/divider';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    UserCreateComponent,
    UserInfoComponent,
    UserUpdateComponent,
    UserSettingsComponent,
    UserDashboardComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class UsersModule {}
