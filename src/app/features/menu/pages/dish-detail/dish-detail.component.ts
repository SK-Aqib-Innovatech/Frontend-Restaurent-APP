import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

interface Topping {
  id: string;
  name: string;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-dish-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent],
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent {
  dish = {
    name: 'The Ultimate Wagyu Burger',
    price: 18.50,
    rating: 4.9,
    reviewCount: 120,
    prepTime: '15-20 min',
    calories: 450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8yqvKK6AUCmNPovL4ZfBTrsAGzR43mbeBCO68X40ZpLXmxoaYQ_oefyPggrD_WAWakFW2eDu3MoBB1jO5AjMK8cFpqLX_zhdbLs8J45g36OFCZaCRSSBGOYPNfxzEHXm6znmHvRt2xoa7ucB-HwKtC7fMUayb00-XHxsSkWxhull2bGxVZToiPxWr6ESiHf8VgLa1ocTWFJchjWxLDuIk9xkMQY_z3f3vcjWIeBJk3jAXwNf5_vtctMLAYTjrEpiIf4IHJ5WQU6E',
    description: 'Premium Wagyu beef patty, aged cheddar, caramelized onions, and our secret house sauce on a toasted brioche bun. Served with a side of truffle fries.'
  };

  toppings: Topping[] = [
    { id: '1', name: 'Extra Bacon', price: 2.50, selected: false },
    { id: '2', name: 'Avocado', price: 1.50, selected: false },
    { id: '3', name: 'Fried Egg', price: 1.00, selected: false }
  ];

  quantity = 1;
  specialInstructions = '';

  get totalPrice(): number {
    const toppingsPrice = this.toppings
      .filter(t => t.selected)
      .reduce((sum, t) => sum + t.price, 0);
    return (this.dish.price + toppingsPrice) * this.quantity;
  }

  onBack(): void {
    console.log('Navigate back');
  }

  onShare(): void {
    console.log('Share dish');
  }

  onFavorite(): void {
    console.log('Toggle favorite');
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  onAddToCart(): void {
    const order = {
      dish: this.dish,
      toppings: this.toppings.filter(t => t.selected),
      quantity: this.quantity,
      specialInstructions: this.specialInstructions,
      total: this.totalPrice
    };
    console.log('Add to cart:', order);
  }
}
