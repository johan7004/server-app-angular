import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddServerComponent } from './add-server/add-server.component';
import { FetchServerComponent } from './fetch-server/fetch-server.component';
import { ServerDetailsComponent } from './server-details/server-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddServerComponent,
    FetchServerComponent,
    ServerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
