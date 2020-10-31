import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserlayoutComponent } from './userlayout.component';
import { MovieComponent } from './movie/movie.component'

const routes: Routes = [
    {
        path: '', component: UserlayoutComponent,
        children: [
            {path: 'movie',component: MovieComponent}

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }