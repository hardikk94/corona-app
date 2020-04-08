import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from '../states/app.state';
import { ListRequestedAction,ListAddRequestedAction,ListDeleteRequestedAction,ListUpdateRequestedAction } from '../actions/dashboard.action';
@Injectable()
export class DashboardStoreService {    
    constructor(private store: Store<AppState>) { }
    public dispatchListAction(item) {
        this.store.dispatch(new ListRequestedAction(item))
    }
    public dispatchListAddAction(item) {
        this.store.dispatch(new ListAddRequestedAction(item))
    }
    public dispatchListDeleteAction(item) {
        this.store.dispatch(new ListDeleteRequestedAction(item))
    }
    public dispatchListUpdateAction(item) {
        this.store.dispatch(new ListUpdateRequestedAction(item))
    }

    public storeSelect() {
        return this.store.select('dashboardInfo')
    }    
}