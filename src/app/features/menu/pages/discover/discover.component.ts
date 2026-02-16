import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { DishCardComponent, DishCard } from '../../../shared/components/dish-card/dish-card.component';
import { BottomNavComponent } from '../../../shared/components/bottom-nav/bottom-nav.component';

interface Category {
  id: string;
  name: string;
  icon: string;
  active: boolean;
}

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, DishCardComponent, BottomNavComponent],
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent {
  restaurant = {
    name: 'Moshi Moshi Sushi',
    rating: 4.8,
    reviewCount: 2100,
    deliveryTime: '20-35 min',
    deliveryFee: 'Free',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_HZhy_n5hHjfBwR0NG-aZNVX6F2QrKTDJCEPSWn-aPamMZts6tDHReHWeO7M2zdEaqp5M6xsZUGvN-fikDrZr3zX59D8qsSh3dJWjK9N2AStgybIlaRV0wUzIGqWst50IQyewjBhYBfzafcik9bUt2mcedof5qppgq6iWElvvEA32F2KmfD-Z3xLq-nUXEl7NWrd1eDVniY2RXtZXQSeAf-GjmrM0NIF-rv91Os-g1jmy165ZH4Ie_Xq9kdvX16n4yVDAO5SxFdY'
  };

  categories: Category[] = [
    { id: '1', name: 'Sushi', icon: 'set_meal', active: true },
    { id: '2', name: 'Ramen', icon: 'ramen_dining', active: false },
    { id: '3', name: 'Pizza', icon: 'local_pizza', active: false },
    { id: '4', name: 'Burgers', icon: 'lunch_dining', active: false },
    { id: '5', name: 'Desserts', icon: 'bakery_dining', active: false }
  ];

  dishes: DishCard[] = [
    {
      id: '1',
      name: 'Salmon Dragon Roll',
      price: 22.00,
      rating: 5.0,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiW3gZK4d9do6M_18MV5xIDKYigav4oisRpi4kshP5XFGu5QYd72Jy-76j1nWunvVzAsUAkvGgN-T8z31BlSB015K79espDIu6ZRIny_Da4V4_DLhM1h1nk0KL3lyST9BVtOvJRIsKxE_kopsr-bqaXP2G7DsxbiKGXsrSpMAgyEQAiKTG0AteGRCDuqeHYyg5tLwjRT7RDAiOeOMJf7UxKLK2f0_UL_hS2uf7npLKr5YOXxcvML1M1nJrJLM7ddZRxEysI4e79Sk',
      badge: { text: "Chef's Choice", color: 'green', icon: 'star' },
      isFavorite: false
    },
    {
      id: '2',
      name: 'Truffle Miso Ramen',
      price: 12.00,
      originalPrice: 24.00,
      rating: 4.9,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQi_WWKZhJt1sBZquHNNlVLFRc7aulFtNfu6K8bzw2GMpn2OapyfHpyQ1f6ArtrIqwSnOta_d6Yo2FeF_Nup1bHpFyhW7BMwzZ15UKWvTn1v4oTAHAy2ylFOlE0fOM8hVjREDOFMwrANNquAnQarcQubCEf1UQtirUzfrn7AnQzwq5lvlmidAOkaeb0NPDhr7z7cypM15Vv4u7UDfHvlQoGCzhsRjBeoVl0Y26Me69sa0xY2m_PfBXWpluddvicQcc5oPKkEUC1Tk',
      badge: { text: '50% OFF', color: 'primary', icon: 'sell' },
      isFavorite: true
    },
    {
      id: '3',
      name: 'Wagyu Smash Slider',
      price: 14.00,
      rating: 4.7,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnXHRZQJnc-fbyhwF2ggHf9YWcfEm4y5nCrg4Q0UNR2JxgHavYsdXbFgrCBUGqaQSvFP6h6rZLrhiL1CGt-YjsqM4teueBREgxzCfN5yV2TIlHsmD3B1wqh2LQzMdnMa6J2LERwmIj6WW6p6cvrJ93GS8jXIWN0A1i6VBhGFdgy_TI1VfOUPt34YsEg1YNYjldIqT69jJA10INCh5oOjJNoADotJ2nmntu8zvYYvXwuWP92_GDcVavbtjOQ7KJRkBc91obHF7hk5Q',
      badge: { text: 'POPULAR', color: 'orange', icon: 'fire' },
      isFavorite: false
    }
  ];

  searchQuery = '';
  basketCount = 2;

  onCategoryClick(category: Category): void {
    this.categories.forEach(c => c.active = false);
    category.active = true;
    console.log('Category selected:', category.name);
  }

  onAddToCart(dishId: string): void {
    console.log('Add to cart:', dishId);
    this.basketCount++;
  }

  onToggleFavorite(dishId: string): void {
    const dish = this.dishes.find(d => d.id === dishId);
    if (dish) {
      dish.isFavorite = !dish.isFavorite;
    }
  }

  onViewMenu(): void {
    console.log('View full menu');
  }

  onNotifications(): void {
    console.log('View notifications');
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
