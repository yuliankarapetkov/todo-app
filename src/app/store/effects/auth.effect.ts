import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import * as authAction from '../actions/auth.action';
import * as fromServices from '../../shared/services';

@Injectable()
export class AuthEffect {
    constructor(
        private actions$: Actions,
        private router: Router,
        private authService: fromServices.AuthService
    ) {}

    @Effect()
    signInUserAnonymously$ = this.actions$
        .ofType(authAction.SIGN_IN_USER_ANONYMOUSLY)
        .pipe(
            switchMap(() => {
                return this.authService
                    .signInAnonymously()
                    .pipe(
                        map(() => new authAction.GetIsAuthenticated()),
                        // catchError(error => of(new authAction.SetError()))
                    );
            })
        );

    @Effect()
    signOutUser$ = this.actions$
        .ofType(authAction.SIGN_OUT_USER)
        .pipe(
            switchMap(() => {
                return this.authService
                    .signOut()
                    .pipe(
                        map(() => new authAction.GetIsAuthenticated()),
                        // catchError(error => of(new authAction.SetError()))
                    );
            })
        );

    @Effect()
    getIsAuthenticated$ = this.actions$
        .ofType(authAction.GET_IS_AUTHENTICATED)
        .pipe(
            switchMap(() => {
                return this.authService
                    .isAuthenticaated
                    .pipe(
                        map((isAuthenticated: boolean) => new authAction.SetIsAuthenticated(isAuthenticated)),
                        // catchError(error => of(new authAction.SetError()))
                    );
            })
        );

    @Effect()
    setIsAuthenticated$ = this.actions$
        .ofType(authAction.SET_IS_AUTHENTICATED)
        .pipe(
            map(isAuthenticated => {
               if (isAuthenticated) {
                   this.router.navigate(['/todos']);
               }  else {
                   this.router.navigate(['/auth']);
               }
            })
        );
}
