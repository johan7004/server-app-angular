import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddServerComponent } from './add-server/add-server.component';
import { FetchServerComponent } from './fetch-server/fetch-server.component';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



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
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
