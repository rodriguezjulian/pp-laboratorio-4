import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../servicios/country.service';
import { FirestoreService } from '../../servicios/firestore.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-alta-veterinario',
  templateUrl: './altaveterinario.component.html',
  styleUrls: ['./altaveterinario.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule]
})
export class AltaVeterinarioComponent implements OnInit {
  veterinarioForm: FormGroup;
  paises: any[] = [];
  selectedCountryFlag: string | undefined;

  constructor(
    private fb: FormBuilder,private router: Router,
    private countryService: CountryService,
    private firestoreService: FirestoreService
  ) {
    this.veterinarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      edad: ['', [Validators.required, Validators.min(21), Validators.max(65)]],
      matricula: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^\d+$/)]],
      atiendeDomicilio: [false],
      nacionalidad: ['', Validators.required]
    });
  }
  atras() {
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    this.countryService.obtenerPaises(['Americas', 'Asia']).subscribe(data => {
      this.paises = data.slice(0, 3);
    });

    this.veterinarioForm.get('nacionalidad')?.valueChanges.subscribe((selectedCountryName) => {
      const selectedCountry = this.paises.find(pais => pais.name.common === selectedCountryName);
      this.selectedCountryFlag = selectedCountry?.flags.svg;
    });
  }

  async onSubmit(): Promise<void> { 
    if (this.veterinarioForm.valid) {
      const nuevoVeterinario = {
        nombre: this.veterinarioForm.get('nombre')?.value,
        dni: this.veterinarioForm.get('dni')?.value,
        edad: this.veterinarioForm.get('edad')?.value,
        matricula: this.veterinarioForm.get('matricula')?.value,
        atiendeDomicilio: this.veterinarioForm.get('atiendeDomicilio')?.value,
        nacionalidad: this.veterinarioForm.get('nacionalidad')?.value,
        bandera: this.selectedCountryFlag
      };

      try {
        const id = await this.firestoreService.createDocument('veterinarios', nuevoVeterinario);
        console.log(`Veterinario creado con éxito, ID: ${id}`);
        Swal.fire({
          icon: 'success',
          title: 'Veterinario Creado',
          text: `El veterinario ${nuevoVeterinario.nombre} ha sido creado exitosamente.`,
          confirmButtonText: 'Aceptar'
        });
        
      } catch (error) {
        console.error('Error al crear el veterinario:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al crear el veterinario. Por favor, intenta nuevamente.',
          confirmButtonText: 'Aceptar'
        });
      }
    }
  }
}
