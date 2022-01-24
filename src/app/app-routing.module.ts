import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { appRoutes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
