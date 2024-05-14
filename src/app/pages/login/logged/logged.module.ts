import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoggedPageRoutingModule } from './logged-routing.module';

import { LoggedPage } from './logged.page';
import { MenuPageModule } from '../../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoggedPageRoutingModule,
    MenuPageModule // Importación del menú lateral
  ],
  declarations: [LoggedPage]
})
export class LoggedPageModule {}
