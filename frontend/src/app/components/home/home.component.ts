import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipmentService } from 'src/app/services/equipment.service';
import { Equipment } from 'src/app/shared/models/Equipment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  equipments: Equipment[] = [];

  constructor(
    private equipmentService: EquipmentService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.equipments = this.equipmentService.searchEquipment(
          params.searchTerm
        );
      } else this.equipments = this.equipmentService.getEquipment();
    });
  }

  ngOnInit(): void {}
}
