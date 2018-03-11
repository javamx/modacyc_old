import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
/* import { resolve } from 'dns'; */
/* import { reject } from 'q'; */

@Injectable()
export class ProductosService {

  producto: any[] = [];
  productos_filtrado: any[] = [];
  cargando: boolean = true;

  constructor(private http: Http) {
    this.cargar_productos();
  }

  /**
   * Buscar_producto
   */
  public buscar_producto(termino: string) {
    console.log("buscando producto");
    console.log(this.producto.length);

    if (this.producto.length === 0) {

      this.cargar_productos().then(() => {

        this.filtrar_productos(termino);

      });

    } else {

      this.filtrar_productos(termino);

    }


  }

  private filtrar_productos(termino: string) {
    this.productos_filtrado = [];
    termino = termino.toLowerCase();
    this.producto.forEach(prod => {
      prod.categoria = prod.categoria.toLowerCase();
      prod.titulo = prod.titulo.toLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.indexOf(termino) >= 0) {
        this.productos_filtrado.push(prod);
        /* console.log(prod); */
      }

    })

  }

  public cargar_producto(cod: string) {

    return this.http.get(`https://modacyc-45e03.firebaseio.com/productos/${cod}.json`);

  }

  public cargar_productos() {
    this.cargando = true;

    let promesa = new Promise((resolve, reject) => {
      this.http.get('https://modacyc-45e03.firebaseio.com/productos_idx.json')
        .subscribe(res => {
          /* console.log(res.json()); */
          this.cargando = false;
          this.producto = res.json();
          resolve();
        });

    });

    return promesa;


  }

}
