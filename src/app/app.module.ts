import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { UserLoginComponent } from './components/toolbar/user-login/user-login.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from './components/toolbar/navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserMenuComponent } from './components/toolbar/user-menu/user-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorInterceptor } from './middleware/error.interceptor';
import { LoggingInterceptor } from './middleware/logging.interceptor';
import { AuthenticationInterceptor } from './middleware/authentication.interceptor';
import { JwtInterceptor } from './middleware/jwt.interceptor';
import { SeparatorPipe } from './pipes/separator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    UserLoginComponent,
    NavigationComponent,
    UserMenuComponent,
    SeparatorPipe,
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
    MatSnackBarModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
