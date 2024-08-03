import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Equipment } from '../shared/models/Equipment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromSessionStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(
    this.cart
  );

  constructor() {}

  addToCart(equipment: Equipment): void {
    let item = this.cart.items.find((i) => i.equipment.id === equipment.id);
    if (item) {
      item.quantity++;
    } else {
      this.cart.items.push({
        equipment: equipment,
        quantity: 1,
        price: equipment.price,
      });
    }
    this.cart.count++;
    this.cart.total += equipment.price;
    this.cartSubject.next(this.cart);
    this.setCartToSessionStorage();
  }

  removeFromCart(equipment: Equipment): void {
    this.cart.items = this.cart.items.filter(
      (i) => i.equipment.id !== equipment.id
    );
    this.setCartToSessionStorage();
  }

  changeQuantity(equipment: Equipment, quantity: number): void {
    let item = this.cart.items.find((i) => i.equipment.id === equipment.id);
    if (item) {
      if (quantity === 0) {
        this.removeFromCart(equipment);
      }
      item.quantity = quantity;
      item.price = item.equipment.price * quantity;
      this.cart.count = this.cart.items.reduce((acc, i) => acc + i.quantity, 0);
      this.cart.total = this.cart.items.reduce(
        (acc, i) => acc + i.quantity * i.price,
        0
      );
      this.setCartToSessionStorage();
    }
  }

  clearCart(): void {
    this.cart = new Cart();
    this.setCartToSessionStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToSessionStorage(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
    this.cartSubject.next(this.cart);
  }

  private getCartFromSessionStorage(): Cart {
    const cartString = sessionStorage.getItem('cart');
    return cartString ? JSON.parse(cartString) : new Cart();
  }
}
