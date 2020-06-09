import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardTabsPageRoutingModule } from './dashboard-tabs-routing.module';

import { DashboardTabsPage } from './dashboard-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardTabsPageRoutingModule
  ],
  declarations: [DashboardTabsPage]
})
export class DashboardTabsPageModule {}
