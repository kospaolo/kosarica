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
}
