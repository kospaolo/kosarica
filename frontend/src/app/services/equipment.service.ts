import { Injectable } from '@angular/core';
import { Equipment } from '../shared/models/Equipment';
import { sample_equipment } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  constructor() {}

  getEquipment(): Equipment[] {
    return sample_equipment;
  }

  searchEquipment(searchTerm: string): Equipment[] {
    return this.getEquipment().filter((equipment) =>
      equipment.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getEquipmentById(id: string): any {
    return this.getEquipment().find((equipment) => equipment.id === id);
  }
}
