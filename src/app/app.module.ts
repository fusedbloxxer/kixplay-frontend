import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserLoginComponent } from './components/toolbar/user-login/user-login.component';
import { NavigationComponent } from './components/toolbar/navigation/navigation.component';
import { UserMenuComponent } from './components/toolbar/user-menu/user-menu.component';
import { ErrorInterceptor } from './middleware/error.interceptor';
import { LoggingInterceptor } from './middleware/logging.interceptor';
import { AuthenticationInterceptor } from './middleware/authentication.interceptor';
import { JwtInterceptor } from './middleware/jwt.interceptor';
import { SharedModule } from './modules/shared/shared.module';
import { CommonModule } from '@angular/common';

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
    HttpClientModule,
    BrowserAnimationsModule,

    // Custom Modules
    SharedModule,
    AppRoutingModule,
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
