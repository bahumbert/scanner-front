import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListJoueursComponent } from './components/list-joueurs/list-joueurs.component';

export const routes: Routes = [
    { path: '', redirectTo: 'liste-joueurs', pathMatch: 'full' },
    { path: '**', redirectTo: 'liste-joueurs', pathMatch: 'full' },
    { path: 'liste-joueurs', component: ListJoueursComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
