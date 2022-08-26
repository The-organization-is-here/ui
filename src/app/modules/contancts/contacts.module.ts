import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContanctsComponent} from "./components/contancts/contancts.component";
import {ContactsRoutingModule} from "./contacts-routing.module";

@NgModule({
  declarations: [
    ContanctsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  providers: [ ],
  exports : [ ContanctsComponent ]
})
export class ContactsModule { }
