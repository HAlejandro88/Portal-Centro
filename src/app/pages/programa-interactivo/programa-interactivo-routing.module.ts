import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramaInteractivoPage } from './programa-interactivo.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramaInteractivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramaInteractivoPageRoutingModule {}
