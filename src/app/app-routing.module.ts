import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContanctsComponent } from "./modules/contancts/components/contancts/contancts.component";
import {CreateComponent} from "./modules/profile/components/create/create.component";
import {AddJobComponent} from "./modules/job/components/add-job/add-job.component";
import {LoginComponent} from "./modules/shared/components/login/login.component";

const routes: Routes = [
    { path:  'contacts', loadChildren: () => import('./modules/contancts/contacts.module').then(m => m.ContactsModule)},
    { path:  'profile', component:  CreateComponent},
    { path:  'jobs', loadChildren: () => import('./modules/job/job.module').then(m => m.JobModule)},
    { path:  'register', component:  CreateComponent},
    { path:  'login', component:  LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
