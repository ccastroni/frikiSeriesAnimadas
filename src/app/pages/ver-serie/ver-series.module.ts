import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerseriesPageRoutingModule } from './ver-series-routing.module';

import { VerseriesPage } from './ver-series.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerseriesPageRoutingModule
  ],
  declarations: [VerseriesPage]
})
export class VerseriesPageModule {}
