import { AuthGuard } from 'src/app/guards/auth.guard';
import { UserCreateComponent } from './components/user-create/user-create.component';

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
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
