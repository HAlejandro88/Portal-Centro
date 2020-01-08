import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioInformativoPage } from './servicio-informativo.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioInformativoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioInformativoPageRoutingModule {}
