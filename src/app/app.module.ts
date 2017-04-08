import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';
import { ListJoueursComponent } from './components/list-joueurs/list-joueurs.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


import { DataTableModule } from 'angular2-datatable';
import { ModalModule } from 'ngx-modal'

import { ListeJoueursService } from './services/liste-joueurs-service';
import { DataFilterPipe }   from './services/data-filter.pipe';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDb }  from './mock/mock-db';


@NgModule({
  declarations: [
    AppComponent,
    ListJoueursComponent,
    NavBarComponent,
    DataFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    InMemoryWebApiModule.forRoot(MockDb),
    ModalModule,
  ],
  providers: [ListeJoueursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
