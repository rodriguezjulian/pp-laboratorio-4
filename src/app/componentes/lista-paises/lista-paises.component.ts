import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CountryService } from '../../servicios/country.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  imports : [CommonModule],
  styleUrls: ['./lista-paises.component.css'],
  standalone: true,
})
export class ListaPaisesComponent implements OnInit {
  paises: any[] = [];

  @Output() paisSeleccionado = new EventEmitter<any>();

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.obtenerPaises(['Americas', 'Asia']).subscribe((data) => {
      this.paises = data.slice(0, 3); // Tomar solo 3 países
    });
  }

  seleccionarPais(pais: any) {
    this.paisSeleccionado.emit(pais); // Emitir el país seleccionado
  }
}
