import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// ngrx module
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from "@ngrx/store";
import { reducers } from './store/reducers/app.reducer'
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from './store/effects/auth.effects'
import { DashboardEffect } from './store/effects/dashboard.effect'

import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects,DashboardEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    NgbModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule { }
