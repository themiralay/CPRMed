import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardSimulatorTabsPageRoutingModule } from './dashboard-simulator-tabs-routing.module';

import { DashboardSimulatorTabsPage } from './dashboard-simulator-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardSimulatorTabsPageRoutingModule
  ],
  declarations: [DashboardSimulatorTabsPage]
})
export class DashboardSimulatorTabsPageModule {}
