import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  { 
    path: 'dashboard', 
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: {title: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: {title: 'Progress'} },
      { path: 'graph1', component: Graph1Component, data: {title: 'Graph'} },
      { path: 'account-settings', component: AccountsettingsComponent, data: {title: 'Acpunt Settings'} },
      { path: 'promises', component: PromisesComponent, data: {title: 'Promises'} },
      { path: 'rxjs', component: RxjsComponent, data: {title: 'RxJs'} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
