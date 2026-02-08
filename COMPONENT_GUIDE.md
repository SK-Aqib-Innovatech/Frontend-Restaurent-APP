# Component Usage Guide

This guide provides examples of how to use the shared components in the Savor Restaurant App.

## Button Component

The `ButtonComponent` is a versatile, reusable button with multiple variants and sizes.

### Import

```typescript
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  // ...
  imports: [ButtonComponent]
})
```

### Basic Usage

```html
<app-button (clicked)="handleClick()"> Click Me </app-button>
```

### Variants

```html
<!-- Primary (default) -->
<app-button variant="primary"> Primary Button </app-button>

<!-- Secondary -->
<app-button variant="secondary"> Secondary Button </app-button>

<!-- Ghost -->
<app-button variant="ghost"> Ghost Button </app-button>

<!-- Outline -->
<app-button variant="outline"> Outline Button </app-button>
```

### Sizes

```html
<!-- Small -->
<app-button size="sm"> Small Button </app-button>

<!-- Medium (default) -->
<app-button size="md"> Medium Button </app-button>

<!-- Large -->
<app-button size="lg"> Large Button </app-button>
```

### States

```html
<!-- Disabled -->
<app-button [disabled]="true"> Disabled Button </app-button>

<!-- Loading -->
<app-button [loading]="isLoading"> Submit </app-button>

<!-- Full Width -->
<app-button [fullWidth]="true"> Full Width Button </app-button>
```

### Complete Example

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <app-button
      variant="primary"
      size="lg"
      [fullWidth]="true"
      [loading]="isSubmitting"
      [disabled]="!isFormValid"
      (clicked)="onSubmit()"
    >
      Submit Order
    </app-button>
  `,
})
export class ExampleComponent {
  isSubmitting = false;
  isFormValid = true;

  async onSubmit(): Promise<void> {
    this.isSubmitting = true;
    try {
      // Perform async operation
      await this.submitOrder();
    } finally {
      this.isSubmitting = false;
    }
  }

  private async submitOrder(): Promise<void> {
    // Implementation
  }
}
```

### Button Props

| Prop        | Type                                               | Default     | Description            |
| ----------- | -------------------------------------------------- | ----------- | ---------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'ghost' \| 'outline'` | `'primary'` | Visual style variant   |
| `size`      | `'sm' \| 'md' \| 'lg'`                             | `'md'`      | Button size            |
| `disabled`  | `boolean`                                          | `false`     | Disable the button     |
| `loading`   | `boolean`                                          | `false`     | Show loading spinner   |
| `fullWidth` | `boolean`                                          | `false`     | Make button full width |
| `type`      | `'button' \| 'submit' \| 'reset'`                  | `'button'`  | HTML button type       |

### Button Events

| Event     | Payload | Description                    |
| --------- | ------- | ------------------------------ |
| `clicked` | `Event` | Emitted when button is clicked |

---

## Auth Social Buttons Component

The `AuthSocialButtonsComponent` displays social login buttons for Google, Apple, and Facebook.

### Import

```typescript
import { AuthSocialButtonsComponent, SocialProvider } from '@shared/components/auth-social-buttons/auth-social-buttons.component';

@Component({
  // ...
  imports: [AuthSocialButtonsComponent]
})
```

### Basic Usage

```html
<app-auth-social-buttons (socialLogin)="handleSocialLogin($event)"></app-auth-social-buttons>
```

### Complete Example

```typescript
import { Component } from '@angular/core';
import {
  AuthSocialButtonsComponent,
  SocialProvider,
} from '@shared/components/auth-social-buttons/auth-social-buttons.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthSocialButtonsComponent],
  template: `
    <div class="login-container">
      <h1>Sign In</h1>

      <div class="divider">
        <span>Or continue with</span>
      </div>

      <app-auth-social-buttons (socialLogin)="handleSocialLogin($event)"></app-auth-social-buttons>
    </div>
  `,
})
export class LoginComponent {
  handleSocialLogin(provider: SocialProvider): void {
    console.log('Login with:', provider);

    switch (provider) {
      case 'google':
        this.loginWithGoogle();
        break;
      case 'apple':
        this.loginWithApple();
        break;
      case 'facebook':
        this.loginWithFacebook();
        break;
    }
  }

  private loginWithGoogle(): void {
    // Implement Google OAuth
  }

  private loginWithApple(): void {
    // Implement Apple Sign In
  }

  private loginWithFacebook(): void {
    // Implement Facebook Login
  }
}
```

### Props

This component has no input properties.

### Events

| Event         | Payload          | Description                                                                                     |
| ------------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| `socialLogin` | `SocialProvider` | Emitted when a social button is clicked. Provider can be `'google'`, `'apple'`, or `'facebook'` |

---

## Creating Your Own Components

### Component Checklist

When creating a new component, follow these guidelines:

1. **Make it Standalone**

   ```typescript
   @Component({
     standalone: true,
     // ...
   })
   ```

2. **Use Proper Imports**

   ```typescript
   imports: [CommonModule, IonicModule, OtherComponents];
   ```

3. **Add Type Safety**

   ```typescript
   @Input() variant: 'primary' | 'secondary' = 'primary';
   @Output() clicked = new EventEmitter<void>();
   ```

4. **Use Path Aliases**

   ```typescript
   import { Variable } from '@styles/abstracts/variables';
   ```

5. **Follow BEM Naming**

   ```scss
   .component-name {
     &__element {
     }
     &--modifier {
     }
   }
   ```

6. **Add Accessibility**
   ```html
   <button aria-label="Close dialog" [attr.aria-expanded]="isOpen"></button>
   ```

### Component Template

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
})
export class MyComponent {
  @Input() title = '';
  @Input() disabled = false;
  @Output() action = new EventEmitter<void>();

  handleAction(): void {
    if (!this.disabled) {
      this.action.emit();
    }
  }
}
```

---

## Styling Components

### Using Global Utilities

```html
<div class="d-flex flex-col gap-md p-lg">
  <h1 class="text-2xl font-bold text-primary">Title</h1>
  <p class="text-base text-secondary">Description</p>
</div>
```

### Component-Scoped Styles

```scss
@use '../../../styles/abstracts/variables' as *;
@use '../../../styles/abstracts/mixins' as *;

.my-component {
  @include card;

  &__header {
    @include flex-between;
    margin-bottom: $spacing-md;
  }

  &__title {
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
    color: $text-primary;
  }

  &--highlighted {
    border: 2px solid $primary;
  }
}
```

### Responsive Design

```scss
.my-component {
  padding: $spacing-md;

  @include respond-to('md') {
    padding: $spacing-lg;
  }

  @include respond-to('lg') {
    padding: $spacing-xl;
  }
}
```

---

## Best Practices

### 1. Component Communication

**Parent to Child (Input)**

```typescript
// Parent
<app-child [data]="parentData"></app-child>

// Child
@Input() data: string;
```

**Child to Parent (Output)**

```typescript
// Child
@Output() dataChanged = new EventEmitter<string>();
this.dataChanged.emit(newValue);

// Parent
<app-child (dataChanged)="handleChange($event)"></app-child>
```

### 2. Reusability

- Keep components small and focused
- Use inputs for configuration
- Avoid tight coupling
- Make components presentation-focused

### 3. Performance

- Use `OnPush` change detection when possible
- Unsubscribe from observables
- Use `trackBy` in `*ngFor`
- Lazy load feature modules

### 4. Accessibility

- Add proper ARIA labels
- Ensure keyboard navigation
- Maintain focus management
- Use semantic HTML

### 5. Testing

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my-component.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit action when clicked', () => {
    spyOn(component.action, 'emit');
    component.handleAction();
    expect(component.action.emit).toHaveBeenCalled();
  });
});
```

---

## Additional Resources

- [Angular Component Guide](https://angular.dev/guide/components)
- [Ionic Component Documentation](https://ionicframework.com/docs/components)
- [BEM Methodology](http://getbem.com/)
