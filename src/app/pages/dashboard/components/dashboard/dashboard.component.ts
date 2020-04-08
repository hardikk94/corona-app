import { Component, OnInit } from '@angular/core';
import { DashboardStoreService } from "./../../../../store/stores/dashboard.store";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/states/app.state";
import { LoadingShowRequested } from "src/app/store/actions/loading.action";
import { LoadingState } from "src/app/store/states/loading.state";
import { DashboardState } from "src/app/store/states/dashboard.state";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dashboadSubscriber;
  public listForm: FormGroup;
  public notes: any = []
  constructor(public dashboardStoreServce: DashboardStoreService,
    private store: Store<AppState>, public formBuilder: FormBuilder) {
    this.listForm = this.formBuilder.group({
      title: ["", [Validators.required]],
      name: ["", [Validators.required]]
    });


    let loadingState: LoadingState = {
      isLoading: true,
      message: "Fetching..."
    };
    this.store.dispatch(new LoadingShowRequested(loadingState));
    this.dashboardStoreServce.dispatchListAction({ data: "1" });

  }

  ngOnInit() {
    this.dashboadSubscriber = this.dashboardStoreServce
      .storeSelect()
      .subscribe((response: DashboardState) => {
        this.notes = response.list
        console.log("this.notes", this.notes)
      });
  }

  public ngOnDestroy() {
    if (this.dashboadSubscriber) {
      this.dashboadSubscriber.unsubscribe();
    }
  }

  public deleteList(item) {
    this.dashboardStoreServce.dispatchListDeleteAction(item)
  }
  public addList() {
    this.dashboardStoreServce.dispatchListAddAction(this.listForm.value)
  }

  public testhere() {
    console.log("testhere", this.listForm)
  }



}
