import { Injectable } from '@angular/core';
import { AuthService } from './../providers/auth.service'
import { ofType, Actions, Effect } from '@ngrx/effects';
import { from,Observable } from 'rxjs';
import { authActionTypes, AuthErrorAction, LoginCompletedAction } from './../actions/auth.action';
import { LoadingHideRequested } from './../actions/loading.action'
import { ToastShowRequested } from './../actions/toast.action'
import { AuthState, ResponseState } from '../states/auth.state';
import { LoadingState } from '../states/loading.state';
import { ToastState } from '../states/toast.state';
import { map,mergeMap , switchMap,catchError} from 'rxjs/operators';

@Injectable()
export class AuthEffects {
    constructor(
        public authService: AuthService,
        private actions$: Actions) {
    }
    @Effect()
    loginAction$: Observable<any> = this.actions$
        .pipe(
            ofType(authActionTypes.LOGIN_REQUESTED),map(this.toPayload),
            switchMap(payload => this.authService.signIn(payload)),
            mergeMap((res: any) => {
                console.log("res",res)
                let loading: LoadingState = { isLoading: false, message: null }
                let toast: ToastState;
                let authResponse: AuthState;
                if (res.success) {
                    toast = { type: 'success', message: res.message, title: 'SUCCESS', isToast: true }
                    authResponse = { userData: res.data, isLoggedIn: true, success: res.success }
                }
                else {                    
                    toast = { type: 'error', message: res.error, title: 'ERROR', isToast: true }
                    authResponse = { userData: res.error, isLoggedIn: true, success: res.success, error: res.error }
                }
                return from([
                    (new ToastShowRequested(toast)),
                    (new LoadingHideRequested(loading)),
                    (new LoginCompletedAction(authResponse))
                ])
            }),catchError(this.handleError))        


    private handleError(error) {        
        let loading: LoadingState = { isLoading: false, message: null }
        let toast: ToastState = { type: 'error', message: error, title: 'ERROR', isToast: true }
        let errorResponse: AuthState = {
            success: 0,
            isLoggedIn: false,
            userData: {},
            error: error
        }
        return from([
            (new ToastShowRequested(toast)),
            (new LoadingHideRequested(loading)),
            (new AuthErrorAction(errorResponse))
        ])
    }


    public toPayload(action) {
        return action.payload
    }
}
