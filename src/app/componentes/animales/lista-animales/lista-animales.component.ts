import { Component } from '@angular/core';
import { FirestoreService } from '../../../servicios/firestore.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { AltaAnimalComponent } from '../alta-animal/alta-animal.component';
import { ModificarAnimalComponent } from '../modificar-animal/modificar-animal.component';
import { EliminarAnimalComponent } from '../eliminar-animal/eliminar-animal.component';

@Component({
  selector: 'app-lista-animales',
  standalone: true,
  imports: [
    CommonModule,
    AltaAnimalComponent,
    ModificarAnimalComponent,
    EliminarAnimalComponent,
  ],
  templateUrl: './lista-animales.component.html',
})
export class ListaAnimalesComponent {
  animales: any[] = [];
  animalSeleccionado: any = null;
  animalSeleccionadoParaEliminar: any = null;

  constructor(private firestoreService: FirestoreService) {
    this.cargarAnimales();
  }

  async cargarAnimales() {
    try {
      const snapshot = await this.firestoreService.getDocuments<any>('animales');
      this.animales = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error al cargar animales:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al cargar los animales.',
        confirmButtonText: 'Aceptar',
      });
    }
  }

  agregarAnimal(animal: any) {
    this.animales.push(animal);
    this.cargarAnimales(); // Actualiza la lista después del alta
  }

  seleccionarAnimalParaModificar(animal: any) {
    this.animalSeleccionado = animal;
  }

  actualizarAnimal(animal: any) {
    const index = this.animales.findIndex((a) => a.id === animal.id);
    if (index !== -1) {
      this.animales[index] = animal;
    }
    this.animalSeleccionado = null;
  }

  seleccionarAnimalParaEliminar(animal: any) {
    this.animalSeleccionadoParaEliminar = animal;
  }

  removerAnimal(animal: any) {
    this.animales = this.animales.filter((a) => a.id !== animal.id);
    this.animalSeleccionadoParaEliminar = null;
  }
}
