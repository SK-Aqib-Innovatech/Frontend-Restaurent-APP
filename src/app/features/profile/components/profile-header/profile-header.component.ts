import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './profile-header.component.html',
})
export class ProfileHeaderComponent {
  @Input() title = 'Profile';
  @Output() back = new EventEmitter<void>();
  @Output() settings = new EventEmitter<void>();
}
