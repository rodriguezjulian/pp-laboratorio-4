import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { FirestoreService } from '../servicios/firestore.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private router: Router
  ) {}

  async canActivate(): Promise<boolean> {
    try {
      // Obtener usuario actual
      const currentUser = this.authService.getCurrentUser();
      console.log("Usuario actual:", JSON.stringify(currentUser, null, 2));

      if (!currentUser) {
        Swal.fire({
          icon: 'error',
          title: 'Acceso Denegado',
          text: 'Debes iniciar sesión para acceder a esta sección.',
        });
        this.router.navigate(['/login']);
        return false;
      }
      console.log("current " + currentUser.uid);
      const userDoc = await this.firestoreService.getDocument<any>(`usuarios/${currentUser.uid}`);
      const userData = userDoc.data();
      console.log("correo :", userData?.correo);
      console.log("rola :", userData?.rol);
      if (userData?.rol === 'admin') {
        return true;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Acceso Denegado',
          text: 'No tienes permisos para acceder a esta sección.',
        });
        this.router.navigate(['/home']);
        return false;
      }
    } catch (error) {
      console.error('Error al verificar el rol del usuario:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un problema al verificar los permisos.',
      });
      this.router.navigate(['/home']);
      return false; // Denegar acceso en caso de error
    }
  }
}
