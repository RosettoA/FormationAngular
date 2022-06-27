import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserEditComponent } from './user-edit/user-edit.component';
import { User } from './users/users.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard
  implements
    CanActivate,
    CanActivateChild,
    CanDeactivate<UserEditComponent>,
    Resolve<User>
{
  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true;
  }

  canDeactivate(
    component: UserEditComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return component.canDeactivate();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User {
    const userId = route.paramMap.get('id');
    return {
      id: 5,
      name: 'Liliane',
    };
  }
}
