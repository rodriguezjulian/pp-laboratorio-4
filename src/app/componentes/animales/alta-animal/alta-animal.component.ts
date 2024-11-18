import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FirestoreService } from '../../../servicios/firestore.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta-animal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './alta-animal.component.html',
})
export class AltaAnimalComponent {
  @Output() animalCreado = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder, private firestoreService: FirestoreService) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      tipo: ['', Validators.required],
      patas: ['', [Validators.required, Validators.min(0), Validators.max(4)]],
      peso: ['', [Validators.required, Validators.min(5), Validators.max(50)]],
    });
  }

  async crearAnimal() {
    if (this.form.valid) {
      const nuevoAnimal = {
        ...this.form.value,
      };

      try {
        // Guardar en Firestore
        const id = await this.firestoreService.createDocument('animales', nuevoAnimal);
        console.log(`Animal creado con éxito, ID: ${id}`);
        Swal.fire({
          icon: 'success',
          title: 'Animal Creado',
          text: `El animal ${nuevoAnimal.nombre} ha sido creado exitosamente.`,
          confirmButtonText: 'Aceptar',
        });

        // Emitir el evento al padre
        this.animalCreado.emit(nuevoAnimal);

        // Resetear el formulario
        this.form.reset();
      } catch (error) {
        console.error('Error al crear el animal:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al crear el animal. Por favor, intenta nuevamente.',
          confirmButtonText: 'Aceptar',
        });
      }
    }
  }
}
