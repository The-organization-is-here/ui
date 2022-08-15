import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContanctsComponent } from "./modules/contancts/components/contancts/contancts.component";
import {CreateComponent} from "./modules/profile/components/create/create.component";

const routes: Routes = [{ path:  'contacts', component:  ContanctsComponent},
  { path:  'profile', component:  CreateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
