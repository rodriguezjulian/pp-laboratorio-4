import { Component, Output, EventEmitter } from '@angular/core';
import { FirestoreService } from '../../servicios/firestore.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tabla-veterinarios',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './tabla-veterinarios.component.html',
  styleUrls: ['./tabla-veterinarios.component.css']
})
export class TablaVeterinariosComponent {
  veterinarios: any[] = [];

  @Output() veterinarioSeleccionado = new EventEmitter<any>();

  constructor(private firestoreService: FirestoreService) {
    this.cargarVeterinarios();
  }
  cargarVeterinarios() {
    this.firestoreService.getDocuments<any>('veterinarios').then((res) => {
      this.veterinarios = res.docs.map((doc) => doc.data());
    });
  }

  seleccionarVeterinario(veterinario: any) {
    this.veterinarioSeleccionado.emit(veterinario);
  }
}
