import { Component, OnInit } from '@angular/core';

///////////////////////////////////////////////////////
import { Router } from '@angular/router'; // Módulo enrutador de angular
import { AuthService } from '../../services/auth.service'; // Importa el servicio auth desde su ubicación

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // Inicializa las variables
  email: string = ""
  password: string = ""

  // Constructor inyecta las importaciones arriba comentadas
  constructor(private authService: AuthService, private Router: Router) { }

  ngOnInit() {
  }

  // Invoca a la función para registrar los datos en la bd de firebase
  register(e:Event){
    this.authService.register(this.email, this.password)
    .then( (res:any) =>{
      console.log(res)
      // Redirige a la página de genérica de ingreso loggeado
      this.Router.navigate(['/generica'])
    })
    .catch((err:any) =>{
      alert('existe error al agregar nuevo usuario; ' + err)
    })
  }
}
