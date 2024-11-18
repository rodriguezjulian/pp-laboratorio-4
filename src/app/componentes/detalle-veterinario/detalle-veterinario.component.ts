import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-veterinario',
  standalone: true,
  templateUrl: './detalle-veterinario.component.html',
  styleUrls: ['./detalle-veterinario.component.css']
})
export class DetalleVeterinarioComponent {
  @Input() veterinario: any;
}
