import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { UserLoginComponent } from './components/toolbar/user-login/user-login.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from './components/toolbar/navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserMenuComponent } from './components/toolbar/user-menu/user-menu.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    UserLoginComponent,
    NavigationComponent,
    UserMenuComponent,
  ],
  imports: [
    // Common Modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    // Custom Modules
    AppRoutingModule,

    // Material UI
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
