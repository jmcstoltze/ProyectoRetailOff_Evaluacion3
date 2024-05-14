import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { firebaseConfig } from './firebase'; // Importación de token de firebase

import { AngularFireModule } from '@angular/fire/compat'; // Módulo de firebase con angular

//////////////////////////////////////////////////////////////////
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx' // Importa funcionalidad de scanneo de códigos
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx' // Importa funcionalidad para abrir páginas web
import { Storage } from '@ionic/storage' // Importa funcionalidad de almacenamiento local
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), // Inicializa la aplicación en firebase

    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    ///////////////////////////////////////
    BarcodeScanner,
    Storage,
    InAppBrowser
  ],
  bootstrap: [AppComponent],  
})
export class AppModule {}
