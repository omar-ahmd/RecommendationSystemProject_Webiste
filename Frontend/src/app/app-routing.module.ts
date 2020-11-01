import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmovieComponent } from './User/smovie/smovie.component';
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const userModule = () => import('./User/user.module').then(x => x.UserModule);
const routes: Routes = [
{ path: 'account', loadChildren: accountModule },
{ path: 'Main', loadChildren: userModule },
{ path: '**',redirectTo:'account' },];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
