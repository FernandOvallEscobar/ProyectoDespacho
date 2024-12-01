import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  private apiUrl = 'https://674c886c54e1fca9290cdc56.mockapi.io/stores'; // endpoint

  constructor(private http: HttpClient) {}

  // Método para obtener las tiendas
  getTiendas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Método para obtener una tienda específica
  getTienda(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Método para crear una tienda
  agregarTienda(tienda: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tienda);
  }
}

