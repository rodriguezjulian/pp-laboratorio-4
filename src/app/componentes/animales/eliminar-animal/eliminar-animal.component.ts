import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FirestoreService } from '../../../servicios/firestore.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminar-animal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eliminar-animal.component.html',
})
export class EliminarAnimalComponent {
  @Input() animal: any; // Recibe el registro del animal por input
  @Output() animalEliminado = new EventEmitter<any>(); // Emite el registro eliminado

  constructor(private firestoreService: FirestoreService) {}

  async eliminarAnimal() {
    try {
      // Eliminar el registro en Firestore
      await this.firestoreService.deleteDocument(`animales/${this.animal.id}`);
      Swal.fire({
        icon: 'success',
        title: 'Animal Eliminado',
        text: `El animal ${this.animal.nombre} ha sido eliminado exitosamente.`,
        confirmButtonText: 'Aceptar',
      });

      // Emitir el evento al padre para actualizar la lista
      this.animalEliminado.emit(this.animal);
    } catch (error) {
      console.error('Error al eliminar el animal:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al eliminar el animal. Por favor, intenta nuevamente.',
        confirmButtonText: 'Aceptar',
      });
    }
  }
}
