import { Routes } from '@angular/router';
import { PruebarutaComponent } from './pruebaruta/pruebaruta.component';
import { PruebarutaenrutamientoComponent } from './pruebarutaenrutamiento/pruebarutaenrutamiento.component';

export const routes: Routes = [
  {
    path: '',
    component: PruebarutaComponent
  },
  {
    path: 'enrutando/otropath',
    component: PruebarutaenrutamientoComponent
  }
];
