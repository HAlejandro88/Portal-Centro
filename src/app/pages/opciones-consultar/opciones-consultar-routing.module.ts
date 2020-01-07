import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcionesConsultarPage } from './opciones-consultar.page';

const routes: Routes = [
  {
    path: '',
    component: OpcionesConsultarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcionesConsultarPageRoutingModule {}
