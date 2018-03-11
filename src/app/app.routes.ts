import { RouterModule, Routes } from '@angular/router';
import {
    AboutComponent,
    ItemsComponent,
    BodyComponent
} from "./components/index.paginas"

const app_routes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'about', component: AboutComponent },
    { path: 'items/:id', component: ItemsComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});