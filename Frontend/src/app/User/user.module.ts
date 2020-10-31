import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlayoutComponent } from './userlayout.component';
import { MovieComponent } from './movie/movie.component';
import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserRoutingModule,
        OwlModule
        
    ],
    declarations: [
        UserlayoutComponent,
        MovieComponent
    ]
})
export class UserModule { }