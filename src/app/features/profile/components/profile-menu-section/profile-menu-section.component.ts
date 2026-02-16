import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuItem } from '../../models/profile.models';

@Component({
  selector: 'app-profile-menu-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-menu-section.component.html',
  styleUrls: ['./profile-menu-section.component.scss'],
})
export class ProfileMenuSectionComponent {
  @Input({ required: true }) title!: string;
  @Input() items: ProfileMenuItem[] = [];
  @Output() itemClick = new EventEmitter<ProfileMenuItem>();

  getIconClass(icon: string): string {
    const iconMap: Record<string, string> = {
      shopping_bag: 'fa-bag-shopping',
      credit_card: 'fa-credit-card',
      location_on: 'fa-location-dot',
      notifications: 'fa-bell',
      help: 'fa-circle-question',
      language: 'fa-language',
    };

    return iconMap[icon] ?? 'fa-circle';
  }
}
