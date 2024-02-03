import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuardGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  if(token) return true
  return inject(Router).createUrlTree(['/fullscreen/login']);
};
