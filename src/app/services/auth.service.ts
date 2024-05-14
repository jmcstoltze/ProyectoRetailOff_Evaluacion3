import { Injectable } from '@angular/core';

// Importa librería con la interfaz de autenticación en firebase con angular
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Inyecta la librería en el constructor para poder utilizar los métodos proporcionados por AngularFireAuth
  constructor(private auth: AngularFireAuth) { }

  // Método para registrar un usuario nuevo
  async register(email:string, password:string) {
    return await this.auth.createUserWithEmailAndPassword(email, password)
  }

  // Método para autenticar a usuario existente
  async login(email:string, password:string) {
      return await this.auth.signInWithEmailAndPassword(email, password)
  }
}
