import { Injectable } from '@angular/core';
import { Equipment } from '../shared/models/Equipment';
import { sample_equipment } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  constructor(private http: HttpClient) {}

  fetchEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>('http://localhost:3000/api/equipments');
  }

  searchEquipment(searchTerm: string): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(
      `http://localhost:3000/api/equipments/search/${searchTerm}`
    );
  }

  getEquipmentById(id: string): Observable<Equipment> {
    return this.http.get<Equipment>(
      `http://localhost:3000/api/equipments/${id}`
    );
  }
}
