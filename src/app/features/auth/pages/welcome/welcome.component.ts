import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { IonContent, IonHeader, IonToolbar } from "@ionic/angular/standalone";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import {
  AuthSocialButtonsComponent,
  SocialProvider,
} from "../../../../shared/components/auth-social-buttons/auth-social-buttons.component";

@Component({
  selector: "app-welcome",
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    ButtonComponent,
    AuthSocialButtonsComponent,
  ],
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  onLogin(): void {
    // Navigate to login page
    console.log("Navigate to login");
    // this.router.navigate(['/auth/login']);
  }

  onCreateAccount(): void {
    // Navigate to signup page
    console.log("Navigate to signup");
    // this.router.navigate(['/auth/signup']);
  }

  onSocialLogin(provider: SocialProvider): void {
    // Handle social login
    console.log("Social login with:", provider);
    // Implement social login logic here
  }

  onContinueAsGuest(): void {
    // Navigate to main app as guest
    console.log("Continue as guest");
    // this.router.navigate(['/home']);
  }
}
