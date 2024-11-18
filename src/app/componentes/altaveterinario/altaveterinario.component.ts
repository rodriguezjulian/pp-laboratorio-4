import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../../servicios/firestore.service';
import { Router } from '@angular/router';
import { ListaPaisesComponent } from '../lista-paises/lista-paises.component';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-alta-veterinario',
  templateUrl: './altaveterinario.component.html',
  styleUrls: ['./altaveterinario.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, ListaPaisesComponent,CommonModule]
})
export class AltaVeterinarioComponent implements OnInit {
  veterinarioForm: FormGroup;
  selectedCountryFlag: string | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
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

  ngOnInit(): void {}

  atras() {
    this.router.navigate(['/home']);
  }

  // Método para recibir el país seleccionado
  recibirPaisSeleccionado(pais: any) {
    this.veterinarioForm.patchValue({ nacionalidad: pais.name.common });
    this.selectedCountryFlag = pais.flags.svg;
  }

  async onSubmit(): Promise<void> {
    if (this.veterinarioForm.valid) {
      const nuevoVeterinario = {
        ...this.veterinarioForm.value,
        bandera: this.selectedCountryFlag,
      };

      try {
        const id = await this.firestoreService.createDocument('veterinarios', nuevoVeterinario);
        console.log(`Veterinario creado con éxito, ID: ${id}`);
        Swal.fire({
          icon: 'success',
          title: 'Veterinario Creado',
          text: `El veterinario ${nuevoVeterinario.nombre} ha sido creado exitosamente.`,
          confirmButtonText: 'Aceptar',
        });
      } catch (error) {
        console.error('Error al crear el veterinario:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al crear el veterinario. Por favor, intenta nuevamente.',
          confirmButtonText: 'Aceptar',
        });
      }
    }
  }
}
