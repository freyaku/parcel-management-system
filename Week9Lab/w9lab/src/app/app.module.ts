import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabaseService } from './components/database.service';
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import {Routes,RouterModule} from '@angular/router';
import { Router } from 'express';
import { AddSenderComponent } from './components/add-sender/add-sender.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListSendersComponent } from './components/list-senders/list-senders.component';
import { AddParcelComponent } from './components/add-parcel/add-parcel.component';
import { ListParcelsComponent } from './components/list-parcels/list-parcels.component';
import { DeleteSenderComponent } from './components/delete-sender/delete-sender.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';




const appRoutes:Routes=[  
  { path: "addsender", component: AddSenderComponent },
  { path: "listsender", component: ListSendersComponent },
  { path: "addparcel", component: AddParcelComponent },
  { path: "listparcel", component: ListParcelsComponent },
  { path: "deletesender", component: DeleteSenderComponent },
  { path: "", component:DashboardComponent },
  { path: "**", component: NotfoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    AddSenderComponent,
    DashboardComponent,
    ListSendersComponent,
    AddParcelComponent,
    ListParcelsComponent,
    DeleteSenderComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{useHash: true}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),




  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
