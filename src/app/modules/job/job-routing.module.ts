import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobSearchComponent} from "./components/job-search/job-search.component";
import {AddJobComponent} from "./components/add-job/add-job.component";

const routes: Routes = [
    { path: 'search',component:  JobSearchComponent},
    { path: 'add',component:  AddJobComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobRoutingModule { }
