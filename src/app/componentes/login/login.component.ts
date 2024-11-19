import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { collection, addDoc, Firestore } from '@angular/fire/firestore';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FirestoreService } from '../../servicios/firestore.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public email: string = '';
  public userPWD: string = '';
  public msjError: string = '';

  constructor(private firestoreService: FirestoreService,    private router: Router,    private firestore: Firestore,    private auth: Auth) {}
   
  async Login() {
    try {
      const res = await signInWithEmailAndPassword(this.auth, this.email, this.userPWD);

      console.log('Usuario autenticado:', res.user);

      await this.GuardarRegistroExitoso();

      const userDoc = await this.firestoreService.getDocument<any>(
        `usuarios/${res.user.uid}`
      );
      const userData = userDoc.data();

      console.log('Datos del usuario:', userData);
      if (userData?.aceptoTerminos) {
        this.Home();
      } else {
        this.Terminos();
      }
    } catch (error: any) {
      console.error('Error en el inicio de sesión:', error);
      switch (error.code) {
        case 'auth/user-not-found':
          this.msjError = 'Usuario no encontrado.';
          break;
        case 'auth/wrong-password':
          this.msjError = 'Contraseña incorrecta.';
          break;
        default:
          this.msjError = 'Error al iniciar sesión. Verifique sus datos.';
      }
    }
  }

  async GuardarRegistroExitoso() {
    try {
      const col = collection(this.firestore, 'logins');
      await addDoc(col, { fecha: new Date(), user: this.email });
    } catch (error) {
      console.error('Error al guardar el registro de inicio de sesión:', error);
    }
  }

  Home() {
    this.router.navigate(['/home']);
  }

  Terminos() {
    this.router.navigate(['/terminos']);
  }

  AutoCompletado() {
    this.email = 'julian.rodriguez@gmail.com';
    this.userPWD = '12345678';
  }

  Auto() {
    this.email = 'empleado@string.com';
    this.userPWD = '12345678';
  }
}
