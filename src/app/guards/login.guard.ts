import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import Swal from 'sweetalert2';

export const loginGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (auth.currentUser) {
    return true; // Usuario autenticado
  } else {
    // Mostrar aviso con SweetAlert2
    Swal.fire({
      icon: 'warning',
      title: 'Acceso Restringido',
      text: 'Debe iniciar sesión para usar esta funcionalidad. Será redirigido al inicio.',
      confirmButtonText: 'Aceptar',
    }).then(() => {
      router.navigate(['/login']); // Redirigir al login
    });

    return false;
  }
};
