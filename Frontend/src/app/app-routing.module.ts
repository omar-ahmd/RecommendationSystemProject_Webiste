import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const userModule = () => import('./User/user.module').then(x => x.UserModule);
const routes: Routes = [
{ path: 'account', loadChildren: accountModule },
{ path: 'user', loadChildren: userModule }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
