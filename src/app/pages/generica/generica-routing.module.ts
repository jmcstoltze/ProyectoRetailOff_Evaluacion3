import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenericaPage } from './generica.page';

const routes: Routes = [
  {
    path: '',
    component: GenericaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenericaPageRoutingModule {}
