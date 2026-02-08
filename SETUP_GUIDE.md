# Setup Guide - Savor Restaurant App

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or 20.x (LTS)
- **npm**: Version 9.x or higher
- **Angular CLI**: Version 18.x
- **Ionic CLI**: Version 7.x or higher

```bash
# Install Angular CLI globally
npm install -g @angular/cli@18

# Install Ionic CLI globally
npm install -g @ionic/cli
```

## Installation Steps

### 1. Install Dependencies

```bash
cd savor-restaurant-app
npm install
```

### 2. Verify Installation

```bash
# Check Angular version
ng version

# Check Ionic version
ionic --version
```

### 3. Run Development Server

```bash
# Using Angular CLI
npm start

# Or using Ionic CLI (recommended)
ionic serve
```

The app will open at `http://localhost:8100` (Ionic) or `http://localhost:4200` (Angular)

### 4. Build for Production

```bash
# Build the app
npm run build

# Or using Ionic
ionic build --prod
```

## Project Configuration

### TypeScript Configuration

The project uses strict TypeScript settings:
- Strict mode enabled
- No implicit any
- Strict null checks
- Path aliases configured

### SCSS Configuration

Global styles are automatically imported via `angular.json`:
- Main entry: `src/app/styles/main.scss`
- Include paths configured for easy imports

### Ionic Configuration

The app is configured with:
- iOS mode for consistent styling
- Animations enabled
- Ripple effects enabled

## Development Workflow

### Creating a New Page

```bash
# Generate a new page component
ng generate component features/menu/pages/menu-list --standalone

# Or create the directory structure manually following the pattern:
# features/
#   └── menu/
#       └── pages/
#           └── menu-list/
#               ├── menu-list.component.ts
#               ├── menu-list.component.html
#               └── menu-list.component.scss
```

### Creating a Shared Component

```bash
# Generate a shared component
ng generate component shared/components/card --standalone
```

### Adding a New Route

Edit `src/app/app.routes.ts`:

```typescript
{
  path: 'menu',
  loadComponent: () => 
    import('./features/menu/pages/menu-list/menu-list.component')
      .then(m => m.MenuListComponent)
}
```

### Using Utility Classes

The project includes comprehensive utility classes:

```html
<!-- Spacing -->
<div class="mt-lg pb-xl px-md">
  Content with margin-top-large, padding-bottom-extra-large, padding-x-medium
</div>

<!-- Typography -->
<h1 class="text-4xl font-bold text-primary leading-tight">
  Large bold primary-colored title
</h1>

<!-- Layout -->
<div class="d-flex flex-col items-center gap-md">
  <span>Centered column layout</span>
  <span>with medium gap</span>
</div>

<!-- Effects -->
<div class="rounded-lg shadow-lg transition-all">
  Card with rounded corners and shadow
</div>
```

## Testing Mobile Devices

### Browser DevTools

1. Open Chrome DevTools (F12)
2. Click the device toolbar icon (Ctrl+Shift+M)
3. Select a mobile device preset
4. Test the responsive design

### Using Ionic Lab

```bash
# Install Ionic Lab
npm install -g @ionic/lab

# Run with Lab UI
ionic serve --lab
```

### Testing on Real Devices

#### iOS (requires macOS)

```bash
# Add iOS platform
ionic cap add ios

# Build and sync
ionic build
ionic cap sync ios

# Open in Xcode
ionic cap open ios
```

#### Android

```bash
# Add Android platform
ionic cap add android

# Build and sync
ionic build
ionic cap sync android

# Open in Android Studio
ionic cap open android
```

## Code Style Guide

### Component Structure

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  // Properties first
  title = 'Example';
  
  // Constructor
  constructor() {}
  
  // Lifecycle hooks
  ngOnInit(): void {}
  
  // Public methods
  handleClick(): void {}
  
  // Private methods
  private helperMethod(): void {}
}
```

### SCSS Structure

```scss
@use '../../../styles/abstracts/variables' as *;
@use '../../../styles/abstracts/mixins' as *;

.component-name {
  // Layout properties
  display: flex;
  
  // Positioning
  position: relative;
  
  // Box model
  width: 100%;
  padding: $spacing-md;
  
  // Typography
  font-size: $font-size-base;
  
  // Visual
  background: $background-dark;
  border-radius: $radius-lg;
  
  // Animation
  transition: all $transition-base;
  
  // Pseudo-elements
  &::before {
    content: '';
  }
  
  // Pseudo-classes
  &:hover {
    background: $surface-dark;
  }
  
  // Modifiers (BEM)
  &--variant {
    background: $primary;
  }
  
  // Child elements (BEM)
  &__child {
    margin-top: $spacing-sm;
  }
  
  // Responsive
  @include respond-to('md') {
    padding: $spacing-lg;
  }
}
```

## Troubleshooting

### Common Issues

**Issue**: Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue**: SCSS compilation errors
```bash
# Verify SCSS syntax
# Check that all imports use @use instead of @import
```

**Issue**: Ionic components not rendering
```bash
# Verify Ionic imports
# Ensure you're importing from @ionic/angular/standalone
```

### Getting Help

- Check the README.md for project structure
- Review Angular documentation: https://angular.dev
- Review Ionic documentation: https://ionicframework.com/docs
- Check component examples in the codebase

## Next Steps

1. Explore the Welcome page implementation
2. Create additional pages (Login, Signup, Home, Menu)
3. Add authentication service
4. Implement API integration
5. Add state management if needed (NgRx, Signals)
6. Configure Capacitor for native features
7. Add unit and e2e tests

## Resources

- [Angular Documentation](https://angular.dev)
- [Ionic Documentation](https://ionicframework.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Capacitor Documentation](https://capacitorjs.com/docs)
