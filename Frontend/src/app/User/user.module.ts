
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
 
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlayoutComponent } from './userlayout.component';
import { MovieComponent } from './movie/movie.component';
import { OwlModule } from 'ngx-owl-carousel';
import { SmovieComponent } from './smovie/smovie.component';
import { AuthService } from '../services/auth.service';
import { CatalogComponent } from './catalog/catalog.component';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserRoutingModule,
        OwlModule,
        PerfectScrollbarModule,
        FormsModule
        
    ],
    declarations: [
        UserlayoutComponent,
        MovieComponent,
        SmovieComponent,
        CatalogComponent
    ],
    providers: [{
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }],
})
export class UserModule { }