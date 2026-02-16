import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface NavItem {
  icon: string;
  label: string;
  route: string;
  badge?: number;
}

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss'],
})
export class BottomNavComponent {
  @Input() items: NavItem[] = [];
  @Input() activeRoute = '';
  @Input() basketCount = 0;
  @Input() showBasket = false;
  @Input() basketRoute = '/basket';
  @Input() basketLabel = 'Basket';

  getIconClass(icon: string): string {
    const iconMap: Record<string, string> = {
      home: 'fa-house',
      menu: 'fa-utensils',
      explore: 'fa-compass',
      history: 'fa-clock-rotate-left',
      favorite: 'fa-heart',
      person: 'fa-user',
    };

    return iconMap[icon] ?? 'fa-circle';
  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }

  get leadingItems(): NavItem[] {
    if (!this.showBasket) {
      return this.items;
    }

    return this.items.slice(0, 2);
  }

  get trailingItems(): NavItem[] {
    if (!this.showBasket) {
      return [];
    }

    return this.items.slice(2);
  }
}
