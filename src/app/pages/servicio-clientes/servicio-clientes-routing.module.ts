import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioClientesPage } from './servicio-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioClientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioClientesPageRoutingModule {}
