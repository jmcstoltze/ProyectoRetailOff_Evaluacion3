import { Component, OnInit } from '@angular/core';

///////////////////////////////////////////////////////
import { Router } from '@angular/router'; // Módulo enrutador de angular
import { AuthService } from '../../services/auth.service'; // Importa el servicio auth desde su ubicación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Inicializa las variables
  email: string = ""
  password: string = ""

  // Constructor inyecta las importaciones arriba comentadas
  constructor(private authService: AuthService, private Router: Router) { }

  ngOnInit() {
  }

  // Invoca al método de login del servicio auth para firebase
  login(e:Event){
    this.authService.login(this.email, this.password)
    .then( (res:any) =>{
      console.log(res)

      //Redirige a página genérica
      this.Router.navigate(['/generica'])
    })
    .catch((err:any) =>{
      alert('existe error al iniciar sesión; ' + err) //Mensaje de excepción
    })
  }
}
