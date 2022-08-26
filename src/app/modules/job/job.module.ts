import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule, JsonPipe} from '@angular/common';
import { AddJobComponent } from './components/add-job/add-job.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule, MatHint} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";
import {MatChipsModule} from "@angular/material/chips";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import { JobDescriptionComponent } from './components/job-description/job-description.component';
import {JobSearchComponent} from "./components/job-search/job-search.component";
import {JobRoutingModule} from "./job-routing.module";
import {Ng2SearchPipeModule} from "ng2-search-filter";



@NgModule({
  declarations: [
    AddJobComponent,
    JobDescriptionComponent,
    JobSearchComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule,
    JobRoutingModule,
    Ng2SearchPipeModule
  ]
})
export class JobModule {}
