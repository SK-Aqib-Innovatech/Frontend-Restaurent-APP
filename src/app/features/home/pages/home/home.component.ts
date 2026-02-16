import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { DishCard, DishCardComponent } from '@shared/components/dish-card/dish-card.component';
import { BottomNavComponent, NavItem } from '@shared/components/bottom-nav/bottom-nav.component';
import { HomeHeaderComponent } from '../../components/home-header/home-header.component';
import { HomeCategory, HomeRestaurant } from '../../models/home.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonContent, DishCardComponent, BottomNavComponent, HomeHeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  restaurant: HomeRestaurant = {
    name: 'Moshi Moshi Sushi',
    rating: 4.8,
    reviewCount: 2100,
    deliveryTime: '20-35 min',
    deliveryFee: 'Free',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_HZhy_n5hHjfBwR0NG-aZNVX6F2QrKTDJCEPSWn-aPamMZts6tDHReHWeO7M2zdEaqp5M6xsZUGvN-fikDrZr3zX59D8qsSh3dJWjK9N2AStgybIlaRV0wUzIGqWst50IQyewjBhYBfzafcik9bUt2mcedof5qppgq6iWElvvEA32F2KmfD-Z3xLq-nUXEl7NWrd1eDVniY2RXtZXQSeAf-GjmrM0NIF-rv91Os-g1jmy165ZH4Ie_Xq9kdvX16n4yVDAO5SxFdY',
  };

  categories: HomeCategory[] = [
    { id: '1', name: 'Sushi', icon: 'set_meal', active: true },
    { id: '2', name: 'Ramen', icon: 'ramen_dining', active: false },
    { id: '3', name: 'Pizza', icon: 'local_pizza', active: false },
    { id: '4', name: 'Burgers', icon: 'lunch_dining', active: false },
    { id: '5', name: 'Desserts', icon: 'bakery_dining', active: false },
  ];

  dishes: DishCard[] = [
    {
      id: '1',
      name: 'Salmon Dragon Roll',
      price: 22.0,
      rating: 5.0,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBiW3gZK4d9do6M_18MV5xIDKYigav4oisRpi4kshP5XFGu5QYd72Jy-76j1nWunvVzAsUAkvGgN-T8z31BlSB015K79espDIu6ZRIny_Da4V4_DLhM1h1nk0KL3lyST9BVtOvJRIsKxE_kopsr-bqaXP2G7DsxbiKGXsrSpMAgyEQAiKTG0AteGRCDuqeHYyg5tLwjRT7RDAiOeOMJf7UxKLK2f0_UL_hS2uf7npLKr5YOXxcvML1M1nJrJLM7ddZRxEysI4e79Sk',
      badge: { text: "Chef's Choice", color: 'green', icon: 'star' },
      isFavorite: false,
    },
    {
      id: '2',
      name: 'Truffle Miso Ramen',
      price: 12.0,
      originalPrice: 24.0,
      rating: 4.9,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAQi_WWKZhJt1sBZquHNNlVLFRc7aulFtNfu6K8bzw2GMpn2OapyfHpyQ1f6ArtrIqwSnOta_d6Yo2FeF_Nup1bHpFyhW7BMwzZ15UKWvTn1v4oTAHAy2ylFOlE0fOM8hVjREDOFMwrANNquAnQarcQubCEf1UQtirUzfrn7AnQzwq5lvlmidAOkaeb0NPDhr7z7cypM15Vv4u7UDfHvlQoGCzhsRjBeoVl0Y26Me69sa0xY2m_PfBXWpluddvicQcc5oPKkEUC1Tk',
      badge: { text: '50% OFF', color: 'primary', icon: 'sell' },
      isFavorite: true,
    },
    {
      id: '3',
      name: 'Wagyu Smash Slider',
      price: 14.0,
      rating: 4.7,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAnXHRZQJnc-fbyhwF2ggHf9YWcfEm4y5nCrg4Q0UNR2JxgHavYsdXbFgrCBUGqaQSvFP6h6rZLrhiL1CGt-YjsqM4teueBREgxzCfN5yV2TIlHsmD3B1wqh2LQzMdnMa6J2LERwmIj6WW6p6cvrJ93GS8jXIWN0A1i6VBhGFdgy_TI1VfOUPt34YsEg1YNYjldIqT69jJA10INCh5oOjJNoADotJ2nmntu8zvYYvXwuWP92_GDcVavbtjOQ7KJRkBc91obHF7hk5Q',
      badge: { text: 'POPULAR', color: 'orange', icon: 'fire' },
      isFavorite: false,
    },
  ];

  bottomNavItems: NavItem[] = [
    { icon: 'menu', label: 'Menu', route: '/home' },
    { icon: 'history', label: 'History', route: '/history' },
    { icon: 'favorite', label: 'Saved', route: '/saved' },
    { icon: 'person', label: 'Account', route: '/profile' },
  ];

  searchQuery = '';
  basketCount = 2;

  onCategoryClick(category: HomeCategory): void {
    this.categories = this.categories.map((currentCategory) => ({
      ...currentCategory,
      active: currentCategory.id === category.id,
    }));
  }

  onAddToCart(_dishId: string): void {
    this.basketCount++;
  }

  onToggleFavorite(dishId: string): void {
    const dish = this.dishes.find((currentDish) => currentDish.id === dishId);
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
}
