import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardSimulatorTabsPage } from './dashboard-simulator-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardSimulatorTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardSimulatorTabsPageRoutingModule {}
