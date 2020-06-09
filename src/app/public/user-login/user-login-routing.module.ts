import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginPage } from './user-login.page';

const routes: Routes = [
  {
    path: '',
    component: UserLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLoginPageRoutingModule {}
