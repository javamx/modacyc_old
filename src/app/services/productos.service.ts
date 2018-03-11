import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  producto: any[] = [];
  cargando: boolean = true;

  constructor(private http: Http) {
    this.cargar_productos();
  }

  public cargar_producto(cod: string) {
    return this.http.get(`https://modacyc-45e03.firebaseio.com/productos/${cod}.json`);
  }

  public cargar_productos() {
    if (this.producto.length === 0) {

      this.http.get('https://modacyc-45e03.firebaseio.com/productos_idx.json')
        .subscribe(res => {
          /* console.log(res.json()); */
          this.cargando = false;
          this.producto = res.json();
        })

    }
  }

}
