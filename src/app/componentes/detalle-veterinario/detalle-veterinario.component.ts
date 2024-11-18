import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detalle-veterinario',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './detalle-veterinario.component.html',
  styleUrls: ['./detalle-veterinario.component.css']
})
export class DetalleVeterinarioComponent {
  @Input() veterinario: any;
}
