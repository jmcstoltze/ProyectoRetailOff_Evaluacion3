import { Component, OnInit } from '@angular/core';

// Importa bar code scanner
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

// Importa módulo datalocalservice
import { DatalocalService } from 'src/app/services/datalocal.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  // Inyecta los módulos importados en el constructor
  constructor(private scanner: BarcodeScanner, private service: DatalocalService) { }

  ngOnInit() {
  }

  // Se llama cuando se activa el scanneo
  scan() {
    this.scanner.scan().then(data =>{
      if(!data.cancelled)

        // Si el scanneo es exitoso se guarda la información en el registro
        this.service.guardar(data.format, data.text)
    })
    .catch(err => {

      // Si hay error se almacenan los valores predeterminados
      this.service.guardar('QRCode', 'geo: -47.5, 50')
    })
  }
}
