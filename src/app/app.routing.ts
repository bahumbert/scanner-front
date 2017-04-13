import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerListComponent } from './components/player-list/list/player-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'player-list', pathMatch: 'full' },
    { path: 'player-list', component: PlayerListComponent },
    /*{ path: '**', redirectTo: 'player-list', pathMatch: 'full' },*/
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
