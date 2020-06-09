import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardStateTabsPage } from './dashboard-state-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardStateTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardStateTabsPageRoutingModule {}
