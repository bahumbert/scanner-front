import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerListComponent } from './components/player-list/list/player-list.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'player-list', pathMatch: 'full' },
    { path: 'player-list', component: PlayerListComponent },
    { path: 'player-details/:id', component: PlayerDetailsComponent},
    { path: '**', redirectTo: 'player-list', pathMatch: 'full' },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
