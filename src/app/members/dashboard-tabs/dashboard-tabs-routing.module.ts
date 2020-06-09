import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardTabsPage } from './dashboard-tabs.page';

const routes: Routes = [
  {
    path: 'dashboard-tabs',
    component: DashboardTabsPage,
    children:[
      {
        path: 'dashboard-simulator-tabs',
        loadChildren: () => import('../dashboard-simulator-tabs/dashboard-simulator-tabs.module').then( m => m.DashboardSimulatorTabsPageModule)
      },
      {
        path: 'dashboard-state-tabs',
        loadChildren: () => import('../dashboard-state-tabs/dashboard-state-tabs.module').then( m => m.DashboardStateTabsPageModule)
      }
    ]
  },
  {
    path:'',
    redirectTo:'dashboard-tabs/dashboard-simulator-tabs',
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardTabsPageRoutingModule {}
