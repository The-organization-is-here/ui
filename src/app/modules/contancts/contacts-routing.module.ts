import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContanctsComponent } from "./components/contancts/contancts.component";

const routes: Routes = [
    { path: '',component:  ContanctsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule { }
