import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeCategory, HomeRestaurant } from '../../models/home.models';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent {
  @Input({ required: true }) restaurant!: HomeRestaurant;
  @Input() categories: HomeCategory[] = [];
  @Input() searchQuery = '';

  @Output() searchQueryChange = new EventEmitter<string>();
  @Output() categoryClick = new EventEmitter<HomeCategory>();
  @Output() notifications = new EventEmitter<void>();
  @Output() viewMenu = new EventEmitter<void>();

  onSearchChange(query: string): void {
    this.searchQueryChange.emit(query);
  }

  onCategoryClick(category: HomeCategory): void {
    this.categoryClick.emit(category);
  }

  getCategoryIconClass(icon: string): string {
    const iconMap: Record<string, string> = {
      set_meal: 'fa-fish',
      ramen_dining: 'fa-bowl-food',
      local_pizza: 'fa-pizza-slice',
      lunch_dining: 'fa-burger',
      bakery_dining: 'fa-cake-candles',
    };

    return iconMap[icon] ?? 'fa-utensils';
  }
}
