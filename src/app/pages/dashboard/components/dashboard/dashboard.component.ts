import { Component, OnInit } from '@angular/core';
import { DashboardStoreService } from "./../../../../store/stores/dashboard.store";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/states/app.state";
import { LoadingShowRequested } from "src/app/store/actions/loading.action";
import { LoadingState } from "src/app/store/states/loading.state";
import { DashboardState } from "src/app/store/states/dashboard.state";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dashboadSubscriber;
  constructor(public dashboardStoreServce: DashboardStoreService,
    private store: Store<AppState>, ) {
  }

  ngOnInit() {
    let loadingState: LoadingState = {
      isLoading: true,
      message: "Fetching..."
    };
    this.store.dispatch(new LoadingShowRequested(loadingState));
    this.dashboardStoreServce.dispatchListAction({ data: "1" });

    this.dashboadSubscriber = this.dashboardStoreServce
      .storeSelect()
      .subscribe((response: DashboardState) => {
        console.log("get list", response)
      });
  }

  public ngOnDestroy() {
    if (this.dashboadSubscriber) {
      this.dashboadSubscriber.unsubscribe();
    }
  }


}
