import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCardInfoComponent } from './components/get-card-info/get-card-info.component';
import {HttpClientModule} from "@angular/common/http";
import {CardServiceService} from "./service/card-service.service";
import { ObjectToStringPipe } from './pipes/object-to-string.pipe';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    GetCardInfoComponent,
    ObjectToStringPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ CardServiceService ],
  exports : [ GetCardInfoComponent ]
})
export class CardCheckModule { }
