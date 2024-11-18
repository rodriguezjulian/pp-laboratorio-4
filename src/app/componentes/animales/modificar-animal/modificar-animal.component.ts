import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FirestoreService } from '../../../servicios/firestore.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modificar-animal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modificar-animal.component.html',
})
export class ModificarAnimalComponent {
  @Input() animal: any; // Recibe el registro del animal por input
  @Output() animalModificado = new EventEmitter<any>(); // Emite el registro modificado

  form: FormGroup;

  constructor(private fb: FormBuilder, private firestoreService: FirestoreService) {
    this.form = this.fb.group({
      tipo: ['', Validators.required],
      patas: ['', [Validators.required, Validators.min(0), Validators.max(4)]],
      peso: ['', [Validators.required, Validators.min(5), Validators.max(50)]],
    });
  }

  ngOnChanges(): void {
    if (this.animal) {
      // Cargar los valores del animal recibido en el formulario
      this.form.patchValue({
        tipo: this.animal.tipo,
        patas: this.animal.patas,
        peso: this.animal.peso,
      });
    }
  }

  async modificarAnimal() {
    if (this.form.valid) {
      const datosModificados = {
        ...this.animal,
        ...this.form.value, // Solo actualiza los campos permitidos
      };

      try {
        // Actualizar en Firestore
        await this.firestoreService.updateDocument(`animales/${this.animal.id}`, datosModificados);
        Swal.fire({
          icon: 'success',
          title: 'Animal Modificado',
          text: `El animal ${this.animal.nombre} ha sido modificado exitosamente.`,
          confirmButtonText: 'Aceptar',
        });

        // Emitir el evento al padre para actualizar la lista
        this.animalModificado.emit(datosModificados);

        // Resetear el formulario
        this.form.reset();
      } catch (error) {
        console.error('Error al modificar el animal:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al modificar el animal. Por favor, intenta nuevamente.',
          confirmButtonText: 'Aceptar',
        });
      }
    }
  }
}
