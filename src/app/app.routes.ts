import { RouterModule, Routes } from '@angular/router';
import {
    AboutComponent,
    ItemsComponent,
    BodyComponent,
    SearchComponent
} from "./components/index.paginas"

const app_routes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'about', component: AboutComponent },
    { path: 'items/:id', component: ItemsComponent },
    { path: 'buscar/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});