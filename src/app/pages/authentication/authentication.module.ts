import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,  
    ReactiveFormsModule,
    CommonModule
  ],
  providers:[]
})
export class AuthenticationModule { }
