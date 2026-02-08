import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';

interface MenuItem {
  icon: string;
  label: string;
  route?: string;
  badge?: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, IonContent, BottomNavComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user = {
    name: 'Marcus Chen',
    email: 'marcus.chen@example.com',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBLmA5foSmAH9-ouHXUcmY-8Goi9KcuPJilbL_6COnuCnh6GYkVRNrsL3OJpHOGrLW_j8kZgfTF7ZFQ9FgMO4mAOfTGsreGNGAhFUUjXe9AeMk6keR-Mwmf9TWUr3v4dHztUecPDWm-WKo_uxlJWHXf8CvlxcD5dUsHxYVrY21bFxi13p2VJUHCtcOj8YMSPVxhQPKCNsnXQOOYg7cyf6lJjIgE7j56GM74x4I2ZZejqevkf-mglgpjj0oAZDmgd9JMAEOSduzhx5c',
    membershipLevel: 'Gold Member',
    rewardPoints: 2450,
    nextLevel: 'Platinum',
    pointsToGo: 550,
    progress: 78,
  };

  activityItems: MenuItem[] = [
    { icon: 'shopping_bag', label: 'Order History', route: '/orders' },
    { icon: 'credit_card', label: 'Payment Methods', route: '/payment' },
    { icon: 'location_on', label: 'My Addresses', route: '/addresses' },
  ];

  settingsItems: MenuItem[] = [
    { icon: 'notifications', label: 'Notifications', route: '/notifications' },
    { icon: 'help', label: 'Help Center', route: '/help' },
    { icon: 'language', label: 'Language', badge: 'English' },
  ];

  onEditProfile(): void {
    console.log('Edit profile');
  }

  onRedeemPoints(): void {
    console.log('Redeem points');
  }

  onLogout(): void {
    console.log('Logout');
  }

  onMenuItemClick(item: MenuItem): void {
    console.log('Navigate to:', item.route);
  }
}
