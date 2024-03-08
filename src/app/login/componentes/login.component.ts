import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { LoginResponse } from 'src/app/moldes/login-response.model';
import { LoginRequest } from 'src/app/moldes/login-request.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginform :FormGroup;
loginrequest:LoginRequest=new LoginRequest()
 
constructor(
private fb:FormBuilder,
private _service:LoginService
){
  this.loginform=this.fb.group({
  email:[null,[Validators .required]],
  password:[null,[Validators .required]],
    
})
};




login(){
  console.log(this.loginform.getRawValue());

  this.loginrequest = this.loginform.getRawValue();
  
  
  this._service.login(this.loginrequest).subscribe({
    next:(data:LoginResponse)=>{
      console.log(data)
    
      alert('usuario correcto')
    },
    error:(err)=>{
      alert('usuario incorrecto')
    },
    complete:()=>{}

     
  })
}


}
