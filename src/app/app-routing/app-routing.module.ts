import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
// import { AddingComponent } from '../adding/adding.component';
import { HomeComponent } from '../home/home.component';
import { AddproductsComponent } from '../addproducts/addproducts.component';

const approuting: Routes = [
  {path:'LoginComponent', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'', component: HomeComponent},
  {path: 'addproducts', component: AddproductsComponent}
  ];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(approuting)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }