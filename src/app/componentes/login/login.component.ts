import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { addDoc, collection, Firestore, query, orderBy, collectionData } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from '@angular/fire/auth';
import { AuthService } from '../../servicios/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public email: string = "";
  public userPWD: string = "";
  public userActive: string = ""; 
  public loginsCollection: any[] = [];
  public countLogins: number = 0;
  private sub: Subscription | undefined;
  public msjError : string = "";

  constructor(private router: Router, private firestore: Firestore, private auth : Auth, private auths :AuthService) {

  }
  
  Login() {
    signInWithEmailAndPassword(this.auth, this.email, this.userPWD).then((res) => {
      
      this.GuardarRegistroExitoso();
      this.Home();
    }).catch((e) => {
      switch(e.code) {
        case "auth/invalid-credential":
          this.msjError = "Email o contraseña incorrectos";
          break;
          case "auth/invalid-email":
            this.msjError = "EMAIL INCORRECTO.";
            break;
        default:
          this.msjError = "ERROR al ingresar sesion, verifique datos ingresados.";
          break;
      }
    });}

  GuardarRegistroExitoso(){
    let col = collection(this.firestore, 'logins');
    addDoc(col, { fecha: new Date(), user: this.email });
  }

  Home() {
    this.router.navigate(['/home']);
  }
  
  AutoCompletado(){
    this.email = "julian.rodriguez@gmail.com";
    this.userPWD = "12345678";
  }
  Auto(){
    this.email = "empleado@string.com";
    this.userPWD = "12345678";
  }
}
