import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  obtenerPaises(continentes: string[]): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((countries) => {
        console.log('Datos obtenidos de la API:', countries);
        return continentes.length > 0
          ? countries.filter((country) => continentes.includes(country.region))
          : countries;
      })
    );
  }
}
