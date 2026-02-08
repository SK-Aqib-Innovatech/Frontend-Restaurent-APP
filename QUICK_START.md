# Quick Start Guide - Savor Restaurant App

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd savor-restaurant-app
npm install
```

### 2. Run the App
```bash
# Start development server
npm start

# Or with Ionic CLI
ionic serve
```

### 3. Open Browser
Navigate to: `http://localhost:8100`

You should see the **Welcome Page** with:
- Beautiful hero image with restaurant icon
- "Log In" and "Create Account" buttons
- Social login options (Google, Apple, Facebook)
- "Continue as Guest" option

---

## 📁 Project Overview

### What's Included

✅ **Complete Angular 18 LTS + Ionic Setup**
- Modern standalone components
- TypeScript with strict mode
- Path aliases configured (@core, @shared, @features)

✅ **Global Styling System**
- `_spacing.scss` - Margin/padding utilities (`.m-*`, `.p-*`)
- `_typography.scss` - Text utilities (`.text-*`, `.font-*`)
- `_display.scss` - Layout utilities (`.d-flex`, `.items-center`)
- `_effects.scss` - Visual effects (`.rounded-*`, `.shadow-*`)
- `_variables.scss` - Design tokens
- `_mixins.scss` - Reusable patterns

✅ **Reusable Components**
- Button component (4 variants, 3 sizes, loading state)
- Auth social buttons component
- All following Ionic + Angular best practices

✅ **Welcome Page**
- Fully implemented and styled
- Responsive design
- Smooth animations
- iOS-style home indicator

---

## 🎯 Key Features Implemented

### 1. Global Utilities

Use anywhere in your HTML:

```html
<!-- Spacing -->
<div class="mt-lg px-md pb-xl">Content</div>

<!-- Typography -->
<h1 class="text-4xl font-bold text-primary">Title</h1>

<!-- Layout -->
<div class="d-flex items-center gap-md">Items</div>

<!-- Effects -->
<div class="rounded-lg shadow-lg">Card</div>
```

### 2. Reusable Button

```html
<app-button 
  variant="primary" 
  size="lg" 
  [fullWidth]="true"
  (clicked)="handleClick()"
>
  Click Me
</app-button>
```

Variants: `primary`, `secondary`, `ghost`, `outline`  
Sizes: `sm`, `md`, `lg`

### 3. Component Structure

```
src/app/
├── core/              # Services, guards, interceptors
├── shared/            # Reusable components
│   └── components/
│       ├── button/
│       └── auth-social-buttons/
├── features/          # Feature modules
│   └── auth/
│       └── pages/
│           └── welcome/
└── styles/            # Global styles (organized!)
    ├── abstracts/     # Variables, mixins
    ├── base/          # Reset
    └── utilities/     # Utility classes
```

---

## 📝 Next Steps

### 1. Add More Pages

Create a menu page:
```bash
ng generate component features/menu/pages/menu-list --standalone
```

Create a login page:
```bash
ng generate component features/auth/pages/login --standalone
```

### 2. Add Services

Create an auth service:
```bash
ng generate service core/services/auth
```

### 3. Implement Navigation

Update `app.routes.ts`:
```typescript
{
  path: 'menu',
  loadComponent: () => 
    import('./features/menu/pages/menu-list/menu-list.component')
      .then(m => m.MenuListComponent)
}
```

Update button clicks in `welcome.component.ts`:
```typescript
onLogin(): void {
  this.router.navigate(['/auth/login']);
}
```

### 4. Add State Management (Optional)

For complex apps:
```bash
npm install @ngrx/store @ngrx/effects
```

Or use Angular Signals (built-in):
```typescript
import { signal, computed } from '@angular/core';

const count = signal(0);
const doubled = computed(() => count() * 2);
```

---

## 📚 Documentation

- **README.md** - Complete project documentation
- **SETUP_GUIDE.md** - Detailed setup instructions
- **COMPONENT_GUIDE.md** - Component usage examples
- **QUICK_START.md** - This file!

---

## 🎨 Customization

### Change Colors

Edit `src/app/styles/abstracts/_variables.scss`:
```scss
$primary: #your-color;
$background-dark: #your-bg-color;
```

### Add New Utility Classes

Edit files in `src/app/styles/utilities/`:
- Spacing utilities → `_spacing.scss`
- Typography → `_typography.scss`
- Layout → `_display.scss`
- Effects → `_effects.scss`

### Modify Components

Component styles are scoped to each component:
- `button.component.scss`
- `auth-social-buttons.component.scss`
- `welcome.component.scss`

---

## 🔧 Common Commands

```bash
# Development
npm start                    # Start dev server
ionic serve                  # Start with Ionic CLI
ionic serve --lab          # Open Ionic Lab UI

# Build
npm run build               # Production build
ionic build                 # Ionic build

# Generate
ng g component path/name --standalone    # New component
ng g service path/name                   # New service
ng g guard path/name                     # New guard

# Lint
npm run lint               # Run linter

# Test
npm test                   # Run tests
```

---

## 🐛 Troubleshooting

**Q: Can't find module errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Q: SCSS errors?**
- Check imports use `@use` not `@import`
- Verify path aliases in `tsconfig.json`

**Q: Ionic components not working?**
- Import from `@ionic/angular/standalone`
- Add to component imports array

---

## ✨ Design Highlights

The app follows modern design principles:

- **Dark theme** with elegant primary color (#ee9d2b)
- **Plus Jakarta Sans** font for professional look
- **Smooth animations** for delightful UX
- **Mobile-first** responsive design
- **iOS-style** indicators and transitions
- **Accessibility-friendly** with proper ARIA labels

---

## 🎓 Learning Resources

- [Angular Docs](https://angular.dev)
- [Ionic Docs](https://ionicframework.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 💡 Pro Tips

1. **Use path aliases** for cleaner imports:
   ```typescript
   import { X } from '@shared/components/x';
   import { Y } from '@core/services/y';
   ```

2. **Combine utility classes** instead of writing custom CSS:
   ```html
   <div class="d-flex items-center gap-md p-lg rounded-lg">
   ```

3. **Follow BEM naming** for component styles:
   ```scss
   .component {
     &__element { }
     &--modifier { }
   }
   ```

4. **Keep components small** - single responsibility principle

5. **Test on real devices** early using Ionic Capacitor

---

Ready to build something amazing! 🚀
