import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { EquipmentService } from 'src/app/services/equipment.service';
import { Equipment } from 'src/app/shared/models/Equipment';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent implements OnInit {
  equipmentId: string = '';
  equipment!: Equipment;

  constructor(
    activatedRoute: ActivatedRoute,
    private equipmentService: EquipmentService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) this.equipmentId = params.id;
    });
  }

  ngOnInit(): void {
    this.equipment =
      this.equipmentService.getEquipmentById(this.equipmentId) ??
      new Equipment();
  }

  addToCart(): void {
    this.cartService.addToCart(this.equipment);
    this.router.navigate(['/cart']);
  }
}
