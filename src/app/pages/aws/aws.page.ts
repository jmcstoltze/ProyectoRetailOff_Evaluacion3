import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/services/aws-apigateway.service';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.page.html',
  styleUrls: ['./aws.page.scss']
})
export class AwsPage implements OnInit {

  nombre_cliente: string = ""
  email: string = ""

  nombre_producto: string = ""
  descripcion: string = ""

  tipo_envio: string = ""
  direccion: string = ""

  constructor(private service: AwsApigatewayService) { }

  ngOnInit() {}

  // Método para enviar datos del cliente
  postCliente() {
    this.service.postCliente(this.nombre_cliente, this.email).subscribe((data) => {
      console.log(data);
    });
  }

  // Método para enviar datos del producto
  postProducto() {
    this.service.postProducto(this.nombre_producto, this.descripcion).subscribe((data) => {
      console.log(data);
    });
  }

  // Método para enviar datos del envío
  postEnvio() {
    this.service.postEnvio(this.tipo_envio, this.direccion).subscribe((data) => {
      console.log(data);
    });
  }
}
