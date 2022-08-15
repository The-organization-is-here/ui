import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContanctsComponent} from "./components/contancts/contancts.component";



@NgModule({
  declarations: [
    ContanctsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ ],
  exports : [ ContanctsComponent ]
})
export class ContactsModule { }
