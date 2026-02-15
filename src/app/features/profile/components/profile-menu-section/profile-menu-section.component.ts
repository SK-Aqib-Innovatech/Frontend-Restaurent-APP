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
}
