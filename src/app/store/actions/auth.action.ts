import { Action } from '@ngrx/store';
import { type } from '../utils';
import { AuthRequestState , AuthState} from './../states/auth.state';

export const authActionTypes = {
    LOGIN_REQUESTED: type<string>("[Login] -Login Requested-"),
    LOGIN_COMPLETED: type<string>("[Login] -Login Completed-"),    
    AUTH_ERROR: type<string>("[Auth] - Auth Error-"),
}

export class LoginRequestedAction implements Action {
    readonly type = authActionTypes.LOGIN_REQUESTED;
    constructor(public payload: AuthRequestState) {
    }
}

export class LoginCompletedAction implements Action {
    readonly type = authActionTypes.LOGIN_COMPLETED;
    constructor(public payload: AuthState) {
    }
}

export class AuthErrorAction implements Action {
    readonly type = authActionTypes.AUTH_ERROR;
    constructor(public payload: any) {
    }
}


export type AuthAction = LoginRequestedAction | LoginCompletedAction | AuthErrorAction   