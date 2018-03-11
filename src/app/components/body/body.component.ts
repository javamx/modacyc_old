import { Component } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  constructor (public _ps:ProductosService){}


}
