import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserlayoutComponent } from './userlayout.component';


const routes: Routes = [
    {
        path: '', component: UserlayoutComponent,
        children: [

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }