import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public identity:any;
  constructor( 
    private _auth:AuthService,
    private _router:Router
    ) { 
      this.identity=this._auth.getIdentity();
    }

  ngOnInit(): void {
  }
  logout(){
    this._auth.logOut();
    this._router.navigate(['/login']);
  }

}
