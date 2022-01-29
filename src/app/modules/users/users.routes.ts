import { AuthGuard } from 'src/app/guards/auth.guard';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

export const usersRoutes = [
  {
    path: 'create',
    component: UserCreateComponent,
    canActivate: [AuthGuard],
    data: {
      onlyAnon: true,
    },
  },
  {
    path: 'settings',
    component: UserSettingsComponent,
    canActivate: [AuthGuard],
  },
  {

  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
