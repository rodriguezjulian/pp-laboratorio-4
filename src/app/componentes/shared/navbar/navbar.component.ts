import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, onAuthStateChanged, signOut, User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports : [CommonModule],
  styleUrls: ['./navbar.component.css'],
  standalone : true
})
export class NavbarComponent implements OnInit {
  usuarioLogueado: User | null = null;

  constructor(private auth: Auth, private router: Router) {}

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      this.usuarioLogueado = user;
    });
  }

  home()
  {
    this.router.navigate(['/home']);
  } 
  veterinarios()
  {
    this.router.navigate(['/veterinarios']);
  }

  altaveterinario()
  {
    this.router.navigate(['/altaveterinario']);
  }
  iniciarSesion() {
    this.router.navigate(['/login']);
  }

  cerrarSesion() {
    signOut(this.auth).then(() => {
      this.router.navigate(['/login']);
    });
  }
}
