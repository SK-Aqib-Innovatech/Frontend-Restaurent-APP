import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUser } from '../../models/profile.models';

@Component({
  selector: 'app-profile-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-user-card.component.html',
  styleUrls: ['./profile-user-card.component.scss'],
})
export class ProfileUserCardComponent {
  @Input({ required: true }) user!: ProfileUser;
  @Output() edit = new EventEmitter<void>();
}
