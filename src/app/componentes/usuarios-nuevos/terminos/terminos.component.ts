import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FirestoreService } from '../../../servicios/firestore.service';
import { AuthService } from '../../../servicios/auth.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./terminos.component.css'],
})
export class TerminosComponent {
  aceptado: boolean = false;
  email: string = '';
  emailValido: boolean = true;

  constructor(
    private router: Router,
    private firestoreService: FirestoreService,
    private authService: AuthService
  ) {}

  validarEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailValido = emailRegex.test(this.email);
  }

  async continuar() {
    this.validarEmail();

    if (!this.emailValido) {
      await Swal.fire({
        icon: 'error',
        title: 'Correo Inválido',
        text: 'Por favor, ingrese un correo válido.',
        confirmButtonText: 'Entendido',
      });
      return;
    }

    const currentUser = this.authService.getCurrentUser();

    if (!currentUser) {
      await Swal.fire({
        icon: 'error',
        title: 'Usuario No Encontrado',
        text: 'No se encontró un usuario activo. Inicia sesión para continuar.',
        confirmButtonText: 'Ir al Login',
      });
      this.router.navigate(['/login']);
      return;
    }

    try {
      const userDoc = await this.firestoreService.getDocument<any>(`usuarios/${currentUser?.uid}`);
      const userData = userDoc.data();

      console.log('Correo registrado:', userData?.correo);

      if (userData?.correo !== this.email) {
        await Swal.fire({
          icon: 'error',
          title: 'El correo no coincide',
          text: 'Ingrese el mismo correo que utilizó durante el registro.',
          confirmButtonText: 'Entendido',
        });
        return;
      }

      // Actualizar Firestore con términos aceptados y correo confirmado
      await this.firestoreService.updateDocument(
        `usuarios/${currentUser.uid}`,
        { aceptoTerminos: true, correoConfirmado: this.email }
      );

      await Swal.fire({
        icon: 'success',
        title: 'Términos Aceptados',
        text: 'Gracias por aceptar los términos y condiciones.',
        confirmButtonText: 'Aceptar',
      });

    } catch (error) {
      console.error('Error al actualizar los términos aceptados:', error);
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al procesar su solicitud. Inténtelo de nuevo.',
        confirmButtonText: 'Entendido',
      });
    }
  }
  home()
  {
    this.router.navigate(['/home']);
  }
}
