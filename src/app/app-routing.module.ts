import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContanctsComponent } from "./modules/contancts/components/contancts/contancts.component";
import {CreateComponent} from "./modules/profile/components/create/create.component";
import {AddJobComponent} from "./modules/job/components/add-job/add-job.component";

const routes: Routes = [
    { path:  'contacts', component:  ContanctsComponent},
    { path:  'profile', component:  CreateComponent},
    { path:  'add-job', component:  AddJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
