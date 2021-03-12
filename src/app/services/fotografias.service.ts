import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FotografiasService {
  private url: string;

  constructor(private _http:HttpClient) { 
    this.url = GLOBAL.url;
  }

  getfotografiasById(id:number):any{
    return this._http.get(this.url + 'fotografia/' + id)
    .toPromise().then(res=>res);
  }
 


  getfotografias():any{
    return this._http.get(this.url + 'fotografias')
    .toPromise().then(res=>res);
  }
 

  getfotografiasAdmin(token:string):any{
    let headers=new Headers({
      'Authorization':token
    });
    let options = new RequestOptions({headers:headers});
    return this._http.get(this.url + 'fotografias-admin')
    .toPromise().then(res=>res);
  }

  save(fotografia:any, token:string):any{
    let headers=new Headers({
      'Authorization':token
    });
    let options = new RequestOptions({headers:headers});
    return this._http.post(this.url + 'fotografia', fotografia)
    .toPromise().then(res=>res);
  }


  update(id:number, fotografia:any,  token:string):any{
    let headers=new Headers({
      'Authorization':token
    });
    let options = new RequestOptions({headers:headers});
    return this._http.put(this.url + 'fotografia/' + id, fotografia)
    .toPromise().then(res=>res);
  }
  
}
