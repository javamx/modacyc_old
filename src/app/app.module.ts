import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

//Rutas
import { app_routing } from "./app.routes";

//Servicios
import { InformacionService } from "./services/informacion.service";
import { ProductosService } from "./services/productos.service";

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { AboutComponent } from './components/about/about.component';
import { ItemsComponent } from './components/items/items.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutComponent,
    ItemsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule
  ],
  providers: [
    InformacionService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
