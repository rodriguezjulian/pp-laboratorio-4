import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from '@angular/fire/auth';
import { TablaVeterinariosComponent} from '../../componentes/tabla-veterinarios/tabla-veterinarios.component'
import { DetalleVeterinarioComponent } from '../../componentes/detalle-veterinario/detalle-veterinario.component'
import { CountryService } from '../../servicios/country.service'
import { DetallePaisComponent } from '../../componentes/detalle-pais/detalle-pais.component'
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-veterinarios',
    standalone: true,
    templateUrl: './veterinarios.component.html',
    styleUrl: './veterinarios.component.css',
    imports: [CommonModule,TablaVeterinariosComponent,DetalleVeterinarioComponent,DetallePaisComponent],
})
export class VeterinariosComponent {
  veterinarioSeleccionado: any;
  paisSeleccionado: any;
  usuarioLogueado: any | null = null; // Guarda información del usuario logueado
  constructor(private auth : Auth, private countryService : CountryService, private router: Router) {
  }

  ngOnInit() {
    this.auth.onAuthStateChanged((user) => {
      this.usuarioLogueado = user;
    });
  }

  altavete() {
    this.router.navigate(['/altaveterinario']);
  }
 

    mostrarDetallesVeterinario(veterinario: any) {
      this.veterinarioSeleccionado = veterinario;
      console.log('Veterinario seleccionado:', veterinario);
      this.cargarPais(veterinario.nacionalidad);
    }
    
    iniciarSesion()
    {
      this.router.navigate(['/login']);
    }

    cargarPais(nombrePais: string) {
      console.log('Buscando país:', nombrePais);
      this.countryService.obtenerPaises([]).subscribe((paises) => {
        console.log('Paises obtenidos:', paises);
        this.paisSeleccionado = paises.find(
          (pais) => pais.name.common.toLowerCase() === nombrePais.toLowerCase()
        );
        console.log('País seleccionado:', this.paisSeleccionado);
      });
    }
    
    cerrarSesion() {
      signOut(this.auth).then(() => {
        this.router.navigate(['/login']);
        });
    }
  
}
