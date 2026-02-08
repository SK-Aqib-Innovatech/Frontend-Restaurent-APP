import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SocialProvider = 'google' | 'apple' | 'facebook';

@Component({
  selector: 'app-auth-social-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-social-buttons.component.html',
  styleUrls: ['./auth-social-buttons.component.scss']
})
export class AuthSocialButtonsComponent {
  @Output() socialLogin = new EventEmitter<SocialProvider>();

  onSocialClick(provider: SocialProvider): void {
    this.socialLogin.emit(provider);
  }
}
