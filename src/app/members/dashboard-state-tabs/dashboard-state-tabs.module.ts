import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardStateTabsPageRoutingModule } from './dashboard-state-tabs-routing.module';

import { DashboardStateTabsPage } from './dashboard-state-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardStateTabsPageRoutingModule
  ],
  declarations: [DashboardStateTabsPage]
})
export class DashboardStateTabsPageModule {}
