import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardCheckModule} from "./modules/card-check/card-check.module";
import {SharedModule} from "./modules/shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProfileModule} from "./modules/profile/profile.module";
import {ContactsModule} from "./modules/contancts/contacts.module";
import {JobModule} from "./modules/job/job.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardCheckModule,
    SharedModule,
    ContactsModule,
    BrowserAnimationsModule,
    ProfileModule,
    JobModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
