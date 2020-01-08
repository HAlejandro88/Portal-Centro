import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasavionPage } from './gasavion.page';

const routes: Routes = [
  {
    path: '',
    component: GasavionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasavionPageRoutingModule {}
