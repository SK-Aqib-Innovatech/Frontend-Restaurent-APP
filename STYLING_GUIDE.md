# Styling Guide - Simplified & Easy to Understand

## Philosophy: Utility-First with Minimal Component Styles

This project uses a **utility-first approach** where most styling is done using reusable utility classes rather than writing custom CSS for every component.

**Benefits:**

- ✅ Faster development
- ✅ Consistent design
- ✅ Smaller CSS bundle
- ✅ Easier to maintain
- ✅ Clear code intent

---

## Quick Reference

### Spacing (4px base scale)

```html
<!-- Margin -->
<div class="m-4">All sides</div>
<div class="mt-2 mb-6">Top & bottom</div>
<div class="mx-8">Horizontal</div>
<div class="my-4">Vertical</div>

<!-- Padding -->
<div class="p-6">All sides</div>
<div class="px-4 py-2">X & Y</div>

<!-- Gap (for flex/grid) -->
<div class="flex gap-4">Items with spacing</div>
```

**Scale:** 0, 1 (4px), 2 (8px), 3 (12px), 4 (16px), 5 (20px), 6 (24px), 8 (32px), 10 (40px), 12 (48px), 16 (64px)

### Typography

```html
<!-- Size -->
<h1 class="text-4xl">36px heading</h1>
<p class="text-base">16px body (default)</p>
<span class="text-sm">14px small</span>

<!-- Weight -->
<span class="font-bold">Bold (700)</span>
<span class="font-semibold">Semibold (600)</span>

<!-- Color -->
<span class="text-white">White text</span>
<span class="text-muted">Muted/gray text</span>
<span class="text-primary">Brand orange</span>
```

### Layout

```html
<!-- Flexbox -->
<div class="flex items-center justify-between">
  <span>Left</span>
  <span>Right</span>
</div>

<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Positioning -->
<div class="relative">
  <div class="absolute top-4 right-4">Badge</div>
</div>
```

### Visual Effects

```html
<!-- Border Radius -->
<div class="rounded-xl">20px radius</div>
<div class="rounded-full">Fully rounded</div>

<!-- Shadows -->
<div class="shadow-lg">Large shadow</div>
<div class="shadow-primary/25">Primary color shadow</div>

<!-- Background -->
<div class="bg-surface">Surface color</div>
<div class="bg-primary">Brand color</div>
```

---

## Design Tokens (Variables)

All design tokens are defined in `src/app/styles/abstracts/_variables.scss`

### Colors

```scss
$primary: #ee9d2b; // Brand orange
$background: #121212; // Dark background
$surface: #1e1e1e; // Cards
$text: #ffffff; // Primary text
$text-muted: #a1a1a1; // Secondary text
```

### Spacing

```scss
$space-1: 4px;
$space-2: 8px;
$space-4: 16px; // Base
$space-6: 24px;
$space-8: 32px;
```

### Typography

```scss
$text-base: 16px; // Default
$text-xl: 20px;
$text-2xl: 24px;
$text-4xl: 36px;
```

---

## When to Use Utilities vs Component Styles

### ✅ USE UTILITIES for:

- Margin, padding, gap
- Text size, weight, color
- Flexbox layout
- Border radius
- Background colors
- Shadows
- Common patterns

**Example (Good):**

```html
<div class="flex items-center gap-4 p-6 rounded-xl bg-surface">
  <img class="w-12 h-12 rounded-full" src="..." />
  <div class="flex-1">
    <h3 class="text-lg font-bold">Title</h3>
    <p class="text-sm text-muted">Subtitle</p>
  </div>
</div>
```

### ❌ USE COMPONENT STYLES for:

- Complex animations
- Pseudo-elements (::before, ::after)
- Hover/active states that need multiple properties
- Component-specific behavior

**Example (Component SCSS):**

```scss
.dish-card {
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    // complex pseudo-element
  }
}
```

---

## Common Patterns

### Card Component

```html
<div class="p-6 rounded-xl bg-surface border border-white/10">
  <h3 class="text-xl font-bold mb-2">Card Title</h3>
  <p class="text-muted">Card description</p>
</div>
```

### Button Row

```html
<div class="flex gap-3">
  <button class="flex-1 py-3 rounded-lg bg-primary font-bold">Primary</button>
  <button class="flex-1 py-3 rounded-lg bg-surface font-bold">Secondary</button>
</div>
```

### Image Card with Overlay

```html
<div class="relative rounded-xl overflow-hidden">
  <img src="..." class="w-full h-full object-cover" />
  <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
  <div class="absolute bottom-4 left-4 right-4">
    <h3 class="text-xl font-bold text-white">Title</h3>
  </div>
</div>
```

### Centered Content

```html
<div class="flex items-center justify-center min-h-screen">
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-4">Welcome</h1>
    <p class="text-muted">Description</p>
  </div>
</div>
```

---

## File Organization

```
src/app/styles/
├── abstracts/
│   ├── _variables.scss  # Design tokens (colors, spacing, etc.)
│   └── _mixins.scss     # Reusable mixins (simple & essential)
├── base/
│   └── _reset.scss      # Browser reset
├── utilities/
│   ├── _spacing.scss    # m-*, p-*, gap-* classes
│   ├── _typography.scss # text-*, font-* classes
│   ├── _display.scss    # flex, grid, position classes
│   ├── _effects.scss    # shadows, rounded, borders
│   └── _common.scss     # bg-*, transition, etc.
└── main.scss            # Imports everything
```

---

## Best Practices

### 1. Prefer Utilities Over Custom CSS

```html
<!-- ✅ Good - Using utilities -->
<div class="flex items-center gap-4 p-4 rounded-lg bg-surface">
  <!-- ❌ Avoid - Custom class for simple styling -->
  <div class="custom-card"><!-- where .custom-card just sets flex, padding, etc. --></div>
</div>
```

### 2. Keep Component SCSS Minimal

```scss
// ✅ Good - Only unique component behavior
.dish-card {
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
}

// ❌ Avoid - Repeating utility-level styles
.dish-card {
  display: flex; // Use class="flex"
  padding: 16px; // Use class="p-4"
  border-radius: 12px; // Use class="rounded-xl"
  background: #1e1e1e; // Use class="bg-surface"
}
```

### 3. Use Semantic Variable Names

```scss
// ✅ Good
background-color: $surface;
padding: $space-4;

// ❌ Avoid
background-color: #1e1e1e;
padding: 16px;
```

### 4. Combine Classes Thoughtfully

```html
<!-- ✅ Good - Clear, scannable -->
<div class="flex items-center gap-4">
  <img class="w-12 h-12 rounded-full" />
  <span class="text-lg font-bold">Name</span>
</div>

<!-- ❌ Avoid - Too many classes, hard to read -->
<div
  class="flex flex-row items-center justify-start gap-4 w-full px-4 py-2 mt-2 mb-4 rounded-lg bg-surface border border-solid border-white/10"
></div>
```

---

## Examples from the App

### Welcome Page (Refactored)

Before: 150+ lines of custom SCSS  
After: ~10 lines of SCSS + utility classes

```html
<!-- Old way - custom classes -->
<div class="welcome-header">
  <h1 class="welcome-header__title">...</h1>
</div>

<!-- New way - utilities -->
<div class="text-center mb-10">
  <h1 class="text-4xl font-extrabold mb-3">...</h1>
</div>
```

### Dish Card Component

Uses utilities for layout, custom SCSS only for hover effects:

```html
<div class="relative rounded-3xl overflow-hidden">
  <img class="w-full h-full object-cover" />
  <div class="absolute bottom-4 left-4">
    <h3 class="text-xl font-extrabold">{{ dish.name }}</h3>
  </div>
</div>
```

---

## Quick Wins

### Convert Custom CSS to Utilities

```scss
// Before
.my-component {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: #1e1e1e;
  border-radius: 16px;
}

// After - Just use HTML classes!
<div class="flex items-center gap-4 p-6 bg-surface rounded-xl">
```

This removes ~6 lines of SCSS and makes the styling immediately visible in the HTML!

---

## Need Help?

- Check `_variables.scss` for available design tokens
- Look at existing components for patterns
- Use browser DevTools to see which utilities are applied
- Refer to this guide for common patterns

---

**Remember:** The goal is to write less CSS and use more utilities. Your HTML should tell the story of how things look!
