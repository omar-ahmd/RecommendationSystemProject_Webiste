import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout.component';
import { RegisterComponent } from './Register/register.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        FormsModule
        
    ],
    declarations: [
        LoginComponent,
        LayoutComponent,
        RegisterComponent

    ]
})
export class AccountModule { }