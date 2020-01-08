import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasavionPageRoutingModule } from './gasavion-routing.module';

import { GasavionPage } from './gasavion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasavionPageRoutingModule
  ],
  declarations: [GasavionPage]
})
export class GasavionPageModule {}
