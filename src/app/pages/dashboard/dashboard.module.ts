import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [DashboardComponent],
  imports: [        
    DashboardRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
