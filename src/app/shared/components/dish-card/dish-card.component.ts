import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingBadgeComponent } from '../rating-badge/rating-badge.component';

export interface DishCard {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  ratingCount?: number;
  badge?: {
    text: string;
    color: 'primary' | 'green' | 'orange';
    icon?: string;
  };
  isFavorite?: boolean;
}

@Component({
  selector: 'app-dish-card',
  standalone: true,
  imports: [CommonModule, RatingBadgeComponent],
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss']
})
export class DishCardComponent {
  @Input() dish!: DishCard;
  @Output() addToCart = new EventEmitter<string>();
  @Output() toggleFavorite = new EventEmitter<string>();

  onAdd(): void {
    this.addToCart.emit(this.dish.id);
  }

  onFavoriteClick(event: Event): void {
    event.stopPropagation();
    this.toggleFavorite.emit(this.dish.id);
  }

  getBadgeClass(): string {
    if (!this.dish.badge) return '';
    
    const colorMap = {
      primary: 'bg-primary',
      green: 'bg-emerald-600',
      orange: 'bg-orange-500'
    };
    
    return colorMap[this.dish.badge.color] || 'bg-primary';
  }
}
