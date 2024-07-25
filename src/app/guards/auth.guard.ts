import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  //console.log("Passei pelo GUARD");

  // guard canActivate
  const router = inject(Router);
  const strToken = localStorage.getItem("MyToken");
  if(!strToken) {
    router.navigate(["/"]);
    return false;
  }

  return true;
};
