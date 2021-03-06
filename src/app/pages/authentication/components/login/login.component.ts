import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthStoreService } from "./../../../../store/stores/auth.store";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/states/app.state";
import { LoadingShowRequested } from "src/app/store/actions/loading.action";
import { LoadingState } from "src/app/store/states/loading.state";
import { AuthState } from "src/app/store/states/auth.state";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public loginSubscriber;
  constructor(    
    public router: Router,
    public authStoreSevice: AuthStoreService,
    private store: Store<AppState>,
    public formBuilder: FormBuilder
  ) {}

  public ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });

    this.loginSubscriber = this.authStoreSevice
      .storeSelect()
      .subscribe((response: AuthState) => {
        if (response.success) {
          sessionStorage.setItem("email",response.userData.email);
          sessionStorage.setItem("authtoken",response.userData.authToken);
          this.router.navigate(["home"]);
        }
      });
  }

  public ngOnDestroy() {
    if (this.loginSubscriber) {
      this.loginSubscriber.unsubscribe();
    }
  }

  public login() {    
    let loadingState: LoadingState = {
      isLoading: true,
      message: "Authenticating..."
    };
    this.store.dispatch(new LoadingShowRequested(loadingState));
    this.authStoreSevice.dispatchLoginAction(this.loginForm.value);
  }
}
