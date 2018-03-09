import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando_productos:boolean = true;

  constructor(private http: Http) {
    this.carga_productos();
   }

  public carga_productos(){
    if( this.productos.length === 0 ){

      this.http.get('https://modacyc-45e03.firebaseio.com/productos_idx.json')
                .subscribe( res => {
                  console.log(res.json());
                  this.cargando_productos = false;
                })

    }
  }

}
