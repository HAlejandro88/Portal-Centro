import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramaInteractivoPageRoutingModule } from './programa-interactivo-routing.module';

import { ProgramaInteractivoPage } from './programa-interactivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramaInteractivoPageRoutingModule
  ],
  declarations: [ProgramaInteractivoPage]
})
export class ProgramaInteractivoPageModule {}
