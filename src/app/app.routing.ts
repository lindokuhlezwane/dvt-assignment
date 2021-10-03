import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from './components/details/details.component';
import { GithubComponent } from './components/github/github.component';
import { SongsComponent } from './components/songs/songs.component';



const routes: Routes = [
    { path: '', component: GithubComponent },
    { path: 'details', component: DetailsComponent },
     { path: 'songs', component: SongsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);