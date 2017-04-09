import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DataFilterPipe }   from './components/data-filter.pipe';
import { PlayerListComponent } from './components/player-list/list/player-list.component';

import { DataTableModule } from 'angular2-datatable';
import { ModalModule } from 'ngx-modal'

import { PlayerListService } from './services/player-list-service';
import { UrlService } from './services/url-service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDb }  from './mock/mock-db';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
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
  providers: [PlayerListService, UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
