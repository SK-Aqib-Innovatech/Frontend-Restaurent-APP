# Savor Restaurant App

A modern, gourmet food delivery application built with Angular 18 (LTS) and Ionic Framework.

## 🎯 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Component-Based Architecture**: Reusable components following Angular and Ionic best practices
- **Global Styling System**: Organized SCSS structure with utilities, variables, and mixins
- **Standalone Components**: Using Angular's latest standalone component API
- **Type Safety**: Full TypeScript support with strict mode enabled
- **Mobile-First**: Optimized for mobile devices with iOS and Android support

## 🏗️ Project Structure

```
savor-restaurant-app/
├── src/
│   ├── app/
│   │   ├── core/                    # Core functionality (services, guards, interceptors)
│   │   │   ├── services/
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   └── models/
│   │   ├── shared/                  # Shared components and utilities
│   │   │   └── components/
│   │   │       ├── button/          # Reusable button component
│   │   │       └── auth-social-buttons/
│   │   ├── features/                # Feature modules
│   │   │   └── auth/
│   │   │       └── pages/
│   │   │           └── welcome/
│   │   └── styles/                  # Global styles
│   │       ├── abstracts/           # Variables, mixins, functions
│   │       │   ├── _variables.scss
│   │       │   └── _mixins.scss
│   │       ├── base/                # Reset, typography
│   │       │   └── _reset.scss
│   │       ├── utilities/           # Utility classes
│   │       │   ├── _spacing.scss    # Margin, padding utilities
│   │       │   ├── _typography.scss # Text utilities
│   │       │   ├── _display.scss    # Layout utilities
│   │       │   └── _effects.scss    # Visual effects
│   │       └── main.scss            # Main entry point
│   ├── assets/                      # Static assets
│   ├── index.html
│   └── main.ts
├── angular.json
├── ionic.config.json
├── package.json
└── tsconfig.json
```

## 🎨 Styling Architecture

### Global Styles Organization

1. **Abstracts** (`styles/abstracts/`)
   - `_variables.scss`: Design tokens (colors, spacing, typography)
   - `_mixins.scss`: Reusable style patterns

2. **Base** (`styles/base/`)
   - `_reset.scss`: Browser reset and foundational styles

3. **Utilities** (`styles/utilities/`)
   - `_spacing.scss`: Margin and padding classes (`.m-*`, `.p-*`)
   - `_typography.scss`: Text styling classes
   - `_display.scss`: Layout and flexbox utilities
   - `_effects.scss`: Visual effects (shadows, borders, transitions)

### Using Utility Classes

```html
<!-- Spacing -->
<div class="mt-lg px-md">Content</div>

<!-- Typography -->
<h1 class="text-4xl font-bold text-primary">Title</h1>

<!-- Layout -->
<div class="d-flex items-center justify-between gap-md">
  <span>Item 1</span>
  <span>Item 2</span>
</div>
```

## 🧩 Component Architecture

### Shared Components

All reusable components are in `shared/components/`:

- **Button Component**: Customizable button with variants (primary, secondary, ghost, outline)
- **Auth Social Buttons**: Social login buttons (Google, Apple, Facebook)

### Component Best Practices

1. **Standalone Components**: All components use the standalone API
2. **Type Safety**: Strong typing for inputs and outputs
3. **Scoped Styles**: Component-specific styles in `.scss` files
4. **Accessibility**: Proper ARIA labels and keyboard navigation
5. **Performance**: OnPush change detection where applicable

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm start
# or
ionic serve

# Build for production
npm run build
# or
ionic build
```

## 🚀 Development Guidelines

### Creating New Components

```bash
# Generate a new component
ng generate component features/feature-name/components/component-name --standalone
```

### Adding New Utility Styles

1. Create or update files in `src/app/styles/utilities/`
2. Import in `src/app/styles/main.scss`
3. Follow the existing naming conventions

### Using Path Aliases

The project supports path aliases for cleaner imports:

```typescript
import { SomeService } from '@core/services/some.service';
import { ButtonComponent } from '@shared/components/button/button.component';
import { WelcomeComponent } from '@features/auth/pages/welcome/welcome.component';
```

## 🎯 Best Practices Implemented

### Angular Best Practices
- ✅ Standalone components
- ✅ Lazy loading routes
- ✅ Strict TypeScript configuration
- ✅ Path aliases for clean imports
- ✅ Reactive forms (when needed)
- ✅ RxJS for async operations

### Ionic Best Practices
- ✅ Ionic standalone components
- ✅ iOS mode for consistent styling
- ✅ Safe area handling for notched devices
- ✅ Hardware back button handling
- ✅ Proper use of Ionic lifecycle hooks

### SCSS Best Practices
- ✅ Modular structure (7-1 pattern inspired)
- ✅ BEM naming convention for components
- ✅ Design tokens (CSS variables + SCSS variables)
- ✅ Mobile-first approach
- ✅ Utility-first classes where appropriate
- ✅ Component-scoped styles

## 📱 Mobile Considerations

- Safe area insets for iOS devices
- Touch-friendly button sizes (minimum 44x44px)
- Smooth animations and transitions
- Optimized for both iOS and Android
- Responsive design with breakpoints

## 🔧 Configuration Files

- `angular.json`: Angular CLI configuration
- `ionic.config.json`: Ionic CLI configuration
- `tsconfig.json`: TypeScript compiler options
- `.eslintrc.json`: ESLint rules
- `package.json`: Project dependencies and scripts

## 📝 License

MIT

## 🤝 Contributing

Follow the established patterns and best practices when contributing to this project.
