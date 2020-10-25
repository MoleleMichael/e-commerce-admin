import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule,  ReactiveFormsModule } from "@angular/forms";

//********* Angular Materials *************\\
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { RouterModule, Routes } from "@angular/router";
import { AddingComponent } from './adding/adding.component';
import { HomeComponent } from './home/home.component';
import { AddproductsComponent } from './addproducts/addproducts.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    RegisterComponent,
    LoginComponent,
    AddingComponent,
    HomeComponent,
    AddproductsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
