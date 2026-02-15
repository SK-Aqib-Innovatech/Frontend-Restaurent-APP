import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { BottomNavComponent } from '../../../../shared/components/bottom-nav/bottom-nav.component';
import { ProfileHeaderComponent } from '../../components/profile-header/profile-header.component';
import { ProfileMenuSectionComponent } from '../../components/profile-menu-section/profile-menu-section.component';
import { ProfileRewardsCardComponent } from '../../components/profile-rewards-card/profile-rewards-card.component';
import { ProfileUserCardComponent } from '../../components/profile-user-card/profile-user-card.component';
import { ProfileMenuItem, ProfileUser } from '../../models/profile.models';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ButtonComponent,
    CommonModule,
    IonContent,
    BottomNavComponent,
    ProfileHeaderComponent,
    ProfileUserCardComponent,
    ProfileRewardsCardComponent,
    ProfileMenuSectionComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user: ProfileUser = {
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

  activityItems: ProfileMenuItem[] = [
    { icon: 'shopping_bag', label: 'Order History', route: '/orders' },
    { icon: 'credit_card', label: 'Payment Methods', route: '/payment' },
    { icon: 'location_on', label: 'My Addresses', route: '/addresses' },
  ];

  settingsItems: ProfileMenuItem[] = [
    { icon: 'notifications', label: 'Notifications', route: '/notifications' },
    { icon: 'help', label: 'Help Center', route: '/help' },
    { icon: 'language', label: 'Language', badge: 'English' },
  ];

  bottomNavItems = [
    { icon: 'home', label: 'Home', route: '/home' },
    { icon: 'explore', label: 'Explore', route: '/discover' },
    { icon: 'favorite', label: 'Favorites', route: '/favorites' },
    { icon: 'person', label: 'Profile', route: '/profile' },
  ];

  versionText = 'App Version 4.12.0 (Build 992)';

  onBack(): void {
    console.log('Back');
  }

  onOpenSettings(): void {
    console.log('Open settings');
  }

  onEditProfile(): void {
    console.log('Edit profile');
  }

  onRedeemPoints(): void {
    console.log('Redeem points');
  }

  onLogout(): void {
    console.log('Logout');
  }

  onMenuItemClick(item: ProfileMenuItem): void {
    console.log('Navigate to:', item.route);
  }
}
