import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurbocinaPage } from './turbocina.page';

const routes: Routes = [
  {
    path: '',
    component: TurbocinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurbocinaPageRoutingModule {}
