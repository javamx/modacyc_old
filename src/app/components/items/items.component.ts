import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent {

  constructor(private router: ActivatedRoute) {

    router.params.subscribe( parametros=>{

      console.log(parametros);
      console.log(parametros['id']);

    })

  }

}
