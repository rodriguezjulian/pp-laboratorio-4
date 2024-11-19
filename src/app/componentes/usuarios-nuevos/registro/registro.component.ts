import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth,signInWithEmailAndPassword } from '@angular/fire/auth';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../servicios/auth.service'
@Component({
  selector: 'app-registro',
  standalone: true,
  imports : [CommonModule,FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  msjError : string = ""; 
  constructor(private auth: Auth, private router: Router, private authService : AuthService) {}

  registrarUsuario() {
    if (this.password !== this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden.',
      });
      return;
    }
    const cliente : any =
    { 
        contrasena : this.password,
        correo : this.email,
        rol : "empleado",
        aceptoTerminos : false
    };
    this.authService.createUser(cliente, this.email, this.password)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'Su sesion se inicio automaticamente y ahora será redirigido para aceptar los términos y condiciones.',
        }).then(() => {
          signInWithEmailAndPassword(this.auth, this.email, this.password);
          
          this.router.navigate(['/terminos']);
        });
      })
      .catch((error) => {
        switch(error.code) {
        case "auth/invalid-email":
          this.msjError = "Email invalido";
          break;
        case "auth/email-already-in-use":
          this.msjError = "Email ya en uso";
          break;
        case "auth/weak-password":
          this.msjError = "La contraseña debe ser de mas de 6 caracteres";
          break;
        case "auth/missing-password":
          this.msjError = "Por favor introduzca una contraseña";
          break;
          default :
          this.msjError = "No se pudo completar el registro";
        }
        console.error('Error ' + this.msjError);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: this.msjError,
        });
      });
  }
}
