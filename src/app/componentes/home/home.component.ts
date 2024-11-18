
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TablaVeterinariosComponent} from '../../componentes/tabla-veterinarios/tabla-veterinarios.component'
import { DetalleVeterinarioComponent } from '../../componentes/detalle-veterinario/detalle-veterinario.component'
import { CountryService } from '../../servicios/country.service'
import { DetallePaisComponent } from '../../componentes/detalle-pais/detalle-pais.component'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TablaVeterinariosComponent,DetalleVeterinarioComponent,DetallePaisComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  veterinarioSeleccionado: any;
  paisSeleccionado: any;
  constructor(private countryService : CountryService, private router: Router) {
  }

  altavete() {
    this.router.navigate(['/altaveterinario']);
  }
 

    mostrarDetallesVeterinario(veterinario: any) {
      this.veterinarioSeleccionado = veterinario;
      console.log('Veterinario seleccionado:', veterinario);
      this.cargarPais(veterinario.nacionalidad); // Llamar a cargarPais con el nombre del país
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
    
    
  
}
