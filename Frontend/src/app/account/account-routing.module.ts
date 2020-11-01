import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout.component';
import { RegisterComponent } from './Register/register.component';


const routes: Routes = [
    
        {
            path: '', component: LayoutComponent,
            children: [
                { path: '', component: LoginComponent },
                { path: 'login', component: LoginComponent },
                { path: 'register', component: RegisterComponent },
                { path: '**', redirectTo: '../Main/movie' }
            ]},
        
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }