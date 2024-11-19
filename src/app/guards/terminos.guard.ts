import { CanDeactivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { FirestoreService } from '../servicios/firestore.service';
import Swal from 'sweetalert2';

export const terminosGuard: CanDeactivateFn<any> = async (component, currentRoute, currentState, nextState) => {
  const authService = inject(AuthService);
  const firestoreService = inject(FirestoreService);

  try {
    // Obtener usuario actual
    const currentUser = authService.getCurrentUser();

    if (!currentUser) {
      await Swal.fire({
        icon: 'error',
        title: 'No Autenticado',
        text: 'Debes iniciar sesión para continuar.',
      });
      return false;
    }
    const userDoc = await firestoreService.getDocument<any>(
      `usuarios/${currentUser.uid}`
    );
    const userData = userDoc.data();
    console.log("ver que pasa: " + userData?.aceptoTerminos)

    if (userData?.aceptoTerminos) {
      return true;
    } else {
      const result = await Swal.fire({
        icon: 'warning',
        title: 'Términos y Condiciones',
        text: 'Debe aceptar los términos y condiciones para navegar.',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
      });

      return false;
    }
  } catch (error) {
    console.error('Error al verificar los términos:', error);
    await Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Ocurrió un problema al verificar los términos.',
    });
    return false;
  }
};
