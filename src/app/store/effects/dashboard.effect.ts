import { Injectable } from '@angular/core';
import { AuthService } from './../providers/auth.service'
import { ofType, Actions, Effect } from '@ngrx/effects';
import { from, Observable } from 'rxjs';
import { dashboardActionTypes, ListCompletedAction, ListErrorAction } from './../actions/dashboard.action'
import { LoadingHideRequested } from './../actions/loading.action'
import { DashboardState } from '../states/dashboard.state';
import { LoadingState } from '../states/loading.state';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class DashboardEffect {
    constructor(
        public authService: AuthService,
        private actions$: Actions) {
    }
    @Effect()
    getNotes$: Observable<any> = this.actions$
        .pipe(
            ofType(dashboardActionTypes.LIST_REQUESTED), map(this.toPayload),
            switchMap(payload => this.authService.getList(payload)),
            mergeMap((res: any) => {
                console.log("res", res)
                let loading: LoadingState = { isLoading: false, message: null }
                let dashboardResponse: DashboardState;
                if (res.success) {
                    dashboardResponse = { list: res }
                }
                else {
                    dashboardResponse = { list: [] }
                }
                return from([
                    (new LoadingHideRequested(loading)),
                    (new ListCompletedAction(dashboardResponse))
                ])
            }), catchError(this.handleError))


    private handleError(error) {
        let loading: LoadingState = { isLoading: false, message: null }
        let errorResponse: DashboardState = {
            list: []
        }
        return from([
            (new LoadingHideRequested(loading)),
            (new ListErrorAction(errorResponse))
        ])
    }


    public toPayload(action) {
        return action.payload
    }
}
