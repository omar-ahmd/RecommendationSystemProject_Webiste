import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserlayoutComponent } from './userlayout.component';
import { MovieComponent } from './movie/movie.component'
import { SmovieComponent } from './smovie/smovie.component';

const routes: Routes = [
    {
        path: '', component: UserlayoutComponent,
        children: [
            { path: 'movie',component: MovieComponent },
            { path: 'movie/:id',component: SmovieComponent },

        ]
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }