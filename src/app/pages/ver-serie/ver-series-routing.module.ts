import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerseriesPage } from './ver-series.page';

const routes: Routes = [
  {
    path: '',
    component: VerseriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerseriesPageRoutingModule {}
