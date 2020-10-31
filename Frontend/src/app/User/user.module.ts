import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlayoutComponent } from './userlayout.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserRoutingModule,
        
    ],
    declarations: [
        UserlayoutComponent,
    ]
})
export class UserModule { }