import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FotografiasService } from '../../services/fotografias.service';
import { AuthService } from '../../services/auth.service';
import { UploadService } from '../../services/upload.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-editar-fotografia',
  templateUrl: './editar-fotografia.component.html',
  styleUrls: ['./editar-fotografia.component.css']
})
export class EditarFotografiaComponent implements OnInit {

  public fotografia:any={};
  public image_selected:string;
  public token:string;
  public filesUpload:Array<File>;
  public url:string;
  
  constructor(
    private _route:ActivatedRoute,
    private _serviceFotografias:FotografiasService,
    private _auth:AuthService,
    private _upload:UploadService,
    private _router:Router

  ) { 
    this.token=this._auth.getToken();
    this.url=GLOBAL.url;
  }
  
  
  ngOnInit(): void {
    this.getFotografia();
  }

  getFotografia(){
    this._route.params.forEach((params:Params)=>{
      this._serviceFotografias.getfotografiasById(params['id'])
      .then(response=>{
        this.fotografia=response.fotografias;
        this.image_selected=response.fotografias.imagen;
      })
      .catch(error=>{
        console.log(error);
      })
    })
  }

  editar(){
    this._serviceFotografias.update(this.fotografia.id, this.fotografia, this.token)
    .then(response=>{
      if(this.filesUpload){
        this._upload.upload(this.url + 'upload-fotografia/' + response.fotografia.id, this.filesUpload,this.token)
        .then(fotografia=>{
          this._router.navigate(['/admin/list']);
        })
        .catch(error=>{
          this._router.navigate(['/admin/list']);
          console.log(error);
        })
      }

    })
    .catch(error=>{
      console.log(error);
    })
  }

  fileChangeEvent(fileInput:any){
    //Preguntamos si son null
    this.filesUpload=fileInput.target.files.length >0?<Array<File>>fileInput.target.files:null;
    this.image_selected=this.filesUpload?fileInput.target.files[0].name:'';
  }



 
}
