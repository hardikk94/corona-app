import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,  
    ReactiveFormsModule  
  ],
  providers:[]
})
export class AuthenticationModule { }
