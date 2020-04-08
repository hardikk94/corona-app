import { Action } from '@ngrx/store';
import { type } from '../utils';
import { DashboardState } from './../states/dashboard.state';

export const dashboardActionTypes = {
    LIST_REQUESTED: type<string>("[Dashboard] -List Requested-"),
    LIST_COMPLETED: type<string>("[Dashboard] -List Completed-"),    
    LIST_DELETE_REQUESTED: type<string>("[Dashboard] -List Delete Requested-"),
    LIST_DELETE_COMPLETED: type<string>("[Dashboard] -List Delete Completed-"),    
    LIST_ADD_REQUESTED: type<string>("[Dashboard] -List Add Requested-"),
    LIST_ADD_COMPLETED: type<string>("[Dashboard] -List Add Completed-"),        
    LIST_UPDATED_REQUESTED: type<string>("[Dashboard] -List Update Requested-"),
    LIST_UPDATED_COMPLETED: type<string>("[Dashboard] -List Update Completed-"),
    LIST_ERROR: type<string>("[Dashboard] - Auth Error-"),
}

export class ListRequestedAction implements Action {
    readonly type = dashboardActionTypes.LIST_REQUESTED;
    constructor(public payload: any) {
    }
}

export class ListCompletedAction implements Action {
    readonly type = dashboardActionTypes.LIST_COMPLETED;
    constructor(public payload: any) {
    }
}
export class ListAddRequestedAction implements Action {
    readonly type = dashboardActionTypes.LIST_ADD_REQUESTED;
    constructor(public payload: any) {
    }
}

export class ListAddCompletedAction implements Action {
    readonly type = dashboardActionTypes.LIST_ADD_COMPLETED;
    constructor(public payload: any) {
    }
}
export class ListDeleteRequestedAction implements Action {
    readonly type = dashboardActionTypes.LIST_DELETE_REQUESTED;
    constructor(public payload: any) {
    }
}

export class ListDeleteCompletedAction implements Action {
    readonly type = dashboardActionTypes.LIST_DELETE_COMPLETED;
    constructor(public payload: any) {
    }
}
export class ListUpdateRequestedAction implements Action {
    readonly type = dashboardActionTypes.LIST_UPDATED_REQUESTED;
    constructor(public payload: any) {
    }
}

export class ListUpdateCompletedAction implements Action {
    readonly type = dashboardActionTypes.LIST_UPDATED_COMPLETED;
    constructor(public payload: any) {
    }
}

export class ListErrorAction implements Action {
    readonly type = dashboardActionTypes.LIST_ERROR;
    constructor(public payload: any) {
    }
}


export type DashboardAction = ListRequestedAction | ListCompletedAction | ListAddRequestedAction | ListAddCompletedAction 
|  ListDeleteRequestedAction | ListDeleteCompletedAction |   ListUpdateRequestedAction | ListUpdateCompletedAction | ListErrorAction