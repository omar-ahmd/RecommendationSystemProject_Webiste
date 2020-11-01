import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlayoutComponent } from './userlayout.component';
import { MovieComponent } from './movie/movie.component';
import { OwlModule } from 'ngx-owl-carousel';
import { SmovieComponent } from './smovie/smovie.component';
import { AuthService } from '../services/auth.service';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserRoutingModule,
        OwlModule
        
    ],
    declarations: [
        UserlayoutComponent,
        MovieComponent,
        SmovieComponent
    ],
    providers: [],
})
export class UserModule { }