import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr'
import { ToastComponent } from './components/toastr.component'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFound404Component } from './components/page-not-found404/page-not-found404.component'
import { ToastService } from './providers/toast.service'
import { ApiService } from './providers/api.service';
import { AppRoutingModule } from './../app-routing.module';
import { AuthGuardService } from './providers/auth.guard.service'
import { AuthService } from './../store/providers/auth.service'
import { AuthStoreService } from './../store/stores/auth.store'
import { DashboardStoreService } from './../store/stores/dashboard.store'
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderService } from './providers/loader.service';
import { ModalService } from './providers/modal.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        ToastComponent,
        PageNotFound404Component,        
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ToastrModule.forRoot({
            toastComponent: ToastComponent,
        }),
        AppRoutingModule,        
        NgxSpinnerModule,
        NgbModule
    ],
    exports: [
        ToastComponent,
        AppRoutingModule,
        NgxSpinnerModule,     
    ],
    entryComponents: [ToastComponent],
    providers: [        
        ToastService,
        ApiService,                
        AuthGuardService,
        AuthStoreService,
        DashboardStoreService,
        AuthService,
        LoaderService,
        ModalService,       
    ],
})
export class CoreModule {
    constructor() {

    }
}