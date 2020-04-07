import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFound404Component } from "./core/components/page-not-found404/page-not-found404.component";
import { AuthGuardService } from "./core/providers/auth.guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/auth",
    pathMatch: "full",
    canActivate: [AuthGuardService]
  },
  {
    path: "auth",
    loadChildren: () =>import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule)      
  },
  {
    path: "home",
    loadChildren: () =>import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),          
    canActivate: [AuthGuardService]
  },
  {
    path: 'not-found',
    component: PageNotFound404Component,
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
