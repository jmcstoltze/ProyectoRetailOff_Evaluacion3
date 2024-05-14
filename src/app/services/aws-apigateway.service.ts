import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class AwsApigatewayService {

  url_cliente: string = "https://a7xqsy2ehf.execute-api.us-east-1.amazonaws.com/evaluacion3/eva3_cliente"
  url_producto: string = "https://a7xqsy2ehf.execute-api.us-east-1.amazonaws.com/evaluacion3/eva3_producto"
  url_envio: string = "https://a7xqsy2ehf.execute-api.us-east-1.amazonaws.com/evaluacion3/eva3_envio"

  /*

    url_cliente: string = "https://o69h2duq19.execute-api.us-east-1.amazonaws.com/eva3_cliente"

    Como no se logró conectar con la api. se intentó crear una nueva, pero tampoco funcionó.
    Se adjuntan screenshots de la creación de BD, funciones, roles y api.
    
  */

  constructor(private httpClient: HttpClient) { }

  postCliente(nombre_cliente:string, email:string){
    
    var body = {
      nombre_cliente: nombre_cliente,
      email: email
    }
    
    return this.httpClient.post(this.url_cliente, body)
  }

  postProducto(nombre_producto:string, descripcion:string){
    
    var body = {
      nombre_producto: nombre_producto,
      descripcion: descripcion
    }
    
    return this.httpClient.post(this.url_producto, body)
  }

  postEnvio(tipo_envio:string, direccion:string){
    
    var body = {
      tipo_envio: tipo_envio,
      direccion: direccion
    }
    
    return this.httpClient.post(this.url_envio, body)
  }  
}
