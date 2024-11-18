import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  public datos: Subject<any>;

  constructor(
    private http : HttpClient
  ) {
    this.datos = new Subject();
  }

  obtenerDatos() {
    console.log("aca");
    this.http.get(`https://api.github.com/users/rodriguezjulian`).subscribe((respuesta) => {
      console.log('Respuesta del API:', respuesta); // Verifica los datos aquí
      this.datos.next(respuesta);
    });
  }
  
}
