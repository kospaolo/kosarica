import { CartItem } from './CartItem';

export class Cart {
  items: CartItem[] = [];
  total: number = 0;
  count: number = 0;
}
