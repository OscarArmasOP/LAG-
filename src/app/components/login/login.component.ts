import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public usuario:any={};

  constructor(

    private _serviceLogin:LoginService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this._serviceLogin.login(this.usuario)
    .then(response=>{

      //Segunda llamada para obtener token
      this._serviceLogin.login(this.usuario, true)
      .then(responseToken =>{
        localStorage.setItem('identity_user', JSON.stringify(response.usuario)); //Variable de sesion
        localStorage.setItem('token', responseToken.token); //Variable de sesion
        
        this._router.navigate(['/admin/list']);
      })
      .catch(error=>{
        console.log(error);
      });

    })
    .catch(error=>{
      console.log(error);
    });
  }

}
