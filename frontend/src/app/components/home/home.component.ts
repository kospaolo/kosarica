import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/services/equipment.service';
import { Equipment } from 'src/app/shared/models/Equipment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  equipments: Equipment[] = [];

  constructor(private equipmentService: EquipmentService) {
    this.equipments = this.equipmentService.getEquipment();
  }

  ngOnInit(): void {
    console.log(this.equipments);
  }
}
