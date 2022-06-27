import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'Users',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: UsersComponent,
    children: [
      {
        path: ':id/edit',
        canDeactivate: [AuthGuard],
        component: UserEditComponent,
      },
      {
        path: ':id',
        data: {
          title: 'User list',
        },
        resolve: {
          user: AuthGuard,
        },
        component: UserComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
