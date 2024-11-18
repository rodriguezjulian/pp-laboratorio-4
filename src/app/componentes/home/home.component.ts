import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GithubService } from '../../servicios/github.service'; // Asegúrate de que la ruta sea correcta
import { Auth, User, onAuthStateChanged } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Cambié `styleUrl` a `styleUrls` (es un array)
})
export class HomeComponent implements OnInit, OnDestroy {
  // Propiedades
  subsDatos!: Subscription; // Suscripción para manejar datos de Github
  usuario!: string; // Nombre de usuario de Github
  imagen!: string; // URL de la imagen del avatar
  cantidadRepos!: string; // Cantidad de repos públicos
  usuarioLogueado: User | null = null; // Usuario autenticado en Firebase

  // Constructor
  constructor(
    private gitServ: GithubService, // Servicio para datos de Github
    private auth: Auth // Servicio de autenticación Firebase
  ) {this.gitServ.obtenerDatos();}

  // Ciclo de vida: ngOnInit
  ngOnInit(): void  {

    this.subsDatos = this.gitServ.datos.subscribe((respuesta) => {
      this.usuario = respuesta.login;
      this.imagen = respuesta.avatar_url;
      this.cantidadRepos = respuesta.public_repos;
    });

    // Observar el estado de autenticación del usuario
    onAuthStateChanged(this.auth, (user) => {
      this.usuarioLogueado = user;
    });
  }

  // Ciclo de vida: ngOnDestroy
  ngOnDestroy() {
    // Cancelar la suscripción para evitar fugas de memoria
    if (this.subsDatos) {
      this.subsDatos.unsubscribe();
    }
  }
}
