import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsetComponent } from './tabset.component';
import { HomeComponent } from './home.component';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabsetComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // This imports all of ng-bootstrap. Could reduce this to just what I need.
    NgbModule,
    NgbTabsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
