import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent {

  producto: any = undefined;
  cod: any = undefined

  constructor(private router: ActivatedRoute,
    private _ps: ProductosService) {

    router.params.subscribe(parametros => {

      /* console.log(parametros);
      console.log(parametros['id']); */

      _ps.cargar_producto(parametros['id'])
        .subscribe(res => {
          this.cod = parametros['id'];
          this.producto = res.json();
          console.log(this.producto);
        })

    })

  }

}
