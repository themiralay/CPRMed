import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserLoginPageRoutingModule } from './user-login-routing.module';

import { UserLoginPage } from './user-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserLoginPageRoutingModule
  ],
  declarations: [UserLoginPage]
})
export class UserLoginPageModule {}
