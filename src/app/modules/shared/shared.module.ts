import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import { MenuComponent } from './components/menu/menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [ ],
  exports : [ HeaderComponent ]
})
export class SharedModule { }
