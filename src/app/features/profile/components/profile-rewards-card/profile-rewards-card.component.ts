import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUser } from '../../models/profile.models';

@Component({
  selector: 'app-profile-rewards-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-rewards-card.component.html',
  styleUrls: ['./profile-rewards-card.component.scss'],
})
export class ProfileRewardsCardComponent {
  @Input({ required: true }) user!: ProfileUser;
  @Output() redeem = new EventEmitter<void>();
}
