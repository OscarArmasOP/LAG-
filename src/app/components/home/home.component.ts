import { Component, OnInit } from '@angular/core';
import { FotografiasService } from 'src/app/services/fotografias.service';
import { GLOBAL } from '../../services/global';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Animations } from '../../animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[Animations]
})
export class HomeComponent implements OnInit {

  public fotografias:any[];
  public url:string;
  public fotografia_seleccionada:any={};
  public ver_mas:boolean=false;
  public foto_actual:number=0;
  public direccion:string;
  public ver_autor:boolean=false;

  constructor(
    private _serviceFotografias:FotografiasService,
    private _route:ActivatedRoute,
    private _router:Router
    ) { 
      this.url=GLOBAL.url;
    }

  ngOnInit(): void {
    this.getfotografias();
  }


  /*
  getFotografias(){
    this._serviceFotografias.getFotografias
    .then(response=>{
      this.fotografias = response.fotografias;
      console.log(this.fotografias);
    })
    .catch(error=>{
      console.log(error);
    })
  }*/

  getfotografias(){
    this._serviceFotografias.getfotografias()
    .then(res=>{
      this.fotografias=res.fotografias;
      this._route.params.forEach((params:Params)=>{
        let num=params['num'];
        this.fotografia_seleccionada.fotografia=this.fotografias.find(result=>{
          return result.numero==num;
        });
        if(!this.fotografia_seleccionada.fotografia){
          this.fotografia_seleccionada.fotografia=this.fotografias[0];
        }

        let next=this.fotografias.indexOf(this.fotografia_seleccionada.fotografia) + 1;
        let prev=this.fotografias.indexOf(this.fotografia_seleccionada.fotografia) - 1;

        this.fotografia_seleccionada.siguiente=next<this.fotografias.length?this.fotografias[next].numero:null;
        this.fotografia_seleccionada.anterior=prev>=0?this.fotografias[prev].numero:null;

        this.moverFotografia(this.fotografia_seleccionada.fotografia);
        
      })
    })
    .catch(error => {
      console.log(error);
    });
  }


  moverFotografia(fotografia:any){
    if(fotografia.numero>this.foto_actual){
      this.direccion="right";
    }else if(fotografia.numero<this.foto_actual){
      this.direccion="left";
    }
    this.foto_actual=fotografia.numero;

    this._router.navigate(['/index/home', this.foto_actual]);
  }
 
}
