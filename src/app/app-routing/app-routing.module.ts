import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

const approuting: Routes = [
  {path:'LoginComponent', component: LoginComponent},
  {path:'', component: RegisterComponent}
  ];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(approuting)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }