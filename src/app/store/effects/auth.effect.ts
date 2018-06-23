import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import * as authAction from '../actions/auth.action';
import * as fromServices from '../../shared/services';

@Injectable()
export class AuthEffect {
    constructor(
        private actions$: Actions,
        private authService: fromServices.AuthService
    ) {}

    @Effect()
    signInUserAnonymously = this.actions$
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
    signOutUser = this.actions$
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
    getIsAuthenticated = this.actions$
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
}
