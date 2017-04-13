import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DataFilterPipe }   from './components/data-filter.pipe';
import { PlayerListComponent } from './components/player-list/list/player-list.component';
import { GeneralGraphComponent } from './components/player-list/graphs/general-graphs.component'

import { DataTableModule } from 'angular2-datatable';
import { ModalModule } from 'ngx-modal'
import { FusionChartsModule } from 'angular2-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { PlayerListService } from './services/player-list-service';
import { UrlService } from './services/url-service';
import { GraphConfigService } from './services/graph-config.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDbListeJoueurs }  from './mock/mock-db-liste-joueurs';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    NavBarComponent,
    DataFilterPipe,
    GeneralGraphComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    InMemoryWebApiModule.forRoot(MockDbListeJoueurs, {delay: 1000}),
    ModalModule,
    FusionChartsModule.forRoot(FusionCharts, Charts),
    MyDateRangePickerModule,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [PlayerListService, UrlService, GraphConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
