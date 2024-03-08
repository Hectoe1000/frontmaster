import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './componentes/login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule,Validator } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    
    HttpClientModule,
    ReactiveFormsModule,
  
    
  ],
  exports:[
    [RouterModule]
  ]
})
export class LoginModule { }
