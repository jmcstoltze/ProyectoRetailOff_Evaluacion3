import { Injectable } from '@angular/core';

import { Registro } from '../models/registro.model'; // Importa la clase Registro

import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';

// Marca la clase DatalocalService como servicio inyectable de Angular
@Injectable({
  providedIn: 'root'
})

// Se define y exporta la clase DatalocalService
export class DatalocalService {

  // Array que almacenará los registros
  guardados: Registro[] = []

  constructor(
    // Inicializa el servicio con tres dependencias
    private storage: Storage,
    private navCtrl: NavController,
    private appBrowser: InAppBrowser
  ) {
    // Llama al método asincrónico
    this.cargaStorage()  
  }
  // Define el método asincrónico 
  async cargaStorage() {

    // Carga los registros guardados o inicializa un array vacío
    this.storage.create()
    this.guardados = (await this.storage.get('registro') || [])
  }

  // Método asíncrono que guarda un nuevo registro en el almacenamiento local
  async guardar(format: string, text:string) {
    await this.cargaStorage()
    const nuevo = new Registro(format, text)

    this.guardados.unshift(nuevo) // El nuevo registro se almacena al principio del array
    this.storage.set('registro', this.guardados)

    this.abrir(nuevo) // Abre el nuevo registro
  }

  // Método que recibe el registro a abrir
  abrir(registro: Registro) {
    this.navCtrl.navigateForward('/history')

    // De acuerdo con el tipo de registro abre en el navegador o dentro de la app
    switch(registro.type) {
      case 'http':
        this.appBrowser.create(registro.text, '_system')
        break
      // Abre dentro de la app
      case 'geo':
        this.navCtrl.navigateForward('/map?geo=${registro.text}')
        break        
    }
  }
}
