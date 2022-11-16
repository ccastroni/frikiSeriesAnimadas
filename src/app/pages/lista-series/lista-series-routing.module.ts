import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaSeriesPage } from './lista-series.page';

const routes: Routes = [
  {
    path: '',
    component: ListaSeriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaSeriesPageRoutingModule {}
