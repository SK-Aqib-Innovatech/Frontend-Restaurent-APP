# Troubleshooting Guide

This guide addresses common issues you might encounter when setting up the Savor Restaurant App.

## ✅ Issues Fixed in Latest Version

The following issues have been resolved in the latest archive:

### 1. ✅ SCSS @use Rules Error
**Error**: `@use rules must be written before any other rules`

**Fixed**: The `main.scss` file now has `@use` rules before `@import` statements.

### 2. ✅ Empty Directories
**Issue**: Some directories were empty and not preserved in the archive

**Fixed**: Added `.gitkeep` files to all empty directories so they're preserved.

### 3. ✅ Ionic Import Paths
**Issue**: Using `~@ionic/angular/css/...` syntax

**Fixed**: Updated to use `@ionic/angular/css/...` (without tilde)

---

## Common Setup Issues

### Issue: "Module not found" errors

If you see errors like:
```
Error: Can't resolve '../../../shared/components/button/button.component'
```

**Solutions**:

1. **Verify all files were extracted**:
   ```bash
   ls -la src/app/shared/components/button/
   ```
   You should see:
   - `button.component.ts`
   - `button.component.html`
   - `button.component.scss`

2. **Clear the Angular cache**:
   ```bash
   rm -rf .angular
   rm -rf node_modules/.cache
   ```

3. **Reinstall dependencies**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Restart the dev server**:
   ```bash
   npm start
   ```

---

### Issue: SCSS compilation errors

If you see SCSS-related errors:

**Solution 1** - Verify SCSS file order in `main.scss`:
```scss
// ✅ CORRECT ORDER:
@use 'abstracts/variables';  // @use FIRST
@use 'abstracts/mixins';

// Then @import
@import url('...');
@import '@ionic/angular/css/core.css';
```

**Solution 2** - Check SCSS syntax in components:
```scss
// ✅ CORRECT:
@use '../../../styles/abstracts/variables' as *;
@use '../../../styles/abstracts/mixins' as *;

// ❌ WRONG (old syntax):
@import '../../../styles/abstracts/variables';
```

---

### Issue: TypeScript path alias errors

If TypeScript can't find modules using `@core`, `@shared`, etc.:

**Solution** - Verify `tsconfig.json` has path mappings:
```json
{
  "compilerOptions": {
    "paths": {
      "@core/*": ["src/app/core/*"],
      "@shared/*": ["src/app/shared/*"],
      "@features/*": ["src/app/features/*"],
      "@styles/*": ["src/app/styles/*"]
    }
  }
}
```

Then restart your IDE/editor.

---

### Issue: Ionic components not working

If Ionic components show errors or don't render:

**Solution 1** - Check imports are from standalone:
```typescript
// ✅ CORRECT:
import { IonContent } from '@ionic/angular/standalone';

// ❌ WRONG:
import { IonContent } from '@ionic/angular';
```

**Solution 2** - Verify component imports:
```typescript
@Component({
  imports: [
    CommonModule,
    IonContent,  // Add all Ionic components here
    IonHeader,
    IonToolbar
  ]
})
```

---

### Issue: "npm install" fails

**Solutions**:

1. **Use correct Node.js version**:
   ```bash
   node --version  # Should be 18.x or 20.x
   ```

2. **Clear npm cache**:
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Use legacy peer deps** (if needed):
   ```bash
   npm install --legacy-peer-deps
   ```

---

### Issue: Port 4200 already in use

**Solution**:
```bash
# Kill process on port 4200
lsof -ti:4200 | xargs kill -9

# Or run on different port
ng serve --port 4300
```

---

### Issue: Build warnings about bundle size

The initial build shows large bundle sizes - this is normal for development.

**For production**, run:
```bash
npm run build --configuration=production
```

This will:
- Tree-shake unused code
- Minify JavaScript
- Optimize bundles
- Reduce bundle size by 70-80%

---

## Verification Checklist

After extracting and installing, verify:

- [ ] All component files exist:
  - `src/app/shared/components/button/*`
  - `src/app/shared/components/auth-social-buttons/*`
  
- [ ] All style files exist:
  - `src/app/styles/abstracts/_variables.scss`
  - `src/app/styles/abstracts/_mixins.scss`
  - `src/app/styles/utilities/_spacing.scss`
  - `src/app/styles/utilities/_typography.scss`
  - `src/app/styles/utilities/_display.scss`
  - `src/app/styles/utilities/_effects.scss`
  - `src/app/styles/base/_reset.scss`
  - `src/app/styles/main.scss`

- [ ] Config files exist:
  - `package.json`
  - `angular.json`
  - `tsconfig.json`
  - `ionic.config.json`

- [ ] Dependencies installed:
  ```bash
  ls node_modules/@angular
  ls node_modules/@ionic
  ```

- [ ] Dev server runs without errors:
  ```bash
  npm start
  ```

---

## Step-by-Step Fresh Install

If you're having persistent issues, try this clean install:

```bash
# 1. Extract the archive
tar -xzf savor-restaurant-app.tar.gz
cd savor-restaurant-app

# 2. Verify extraction
ls -la src/app/shared/components/button/
# Should show: button.component.ts, .html, .scss

# 3. Install dependencies
npm install

# 4. Clear Angular cache
rm -rf .angular

# 5. Start dev server
npm start

# 6. Open browser
# Navigate to http://localhost:4200
```

---

## Still Having Issues?

### Check versions:
```bash
node --version    # Should be 18.x or 20.x
npm --version     # Should be 9.x or higher
ng version        # Should be 18.x
ionic --version   # Should be 7.x
```

### Enable verbose logging:
```bash
npm start -- --verbose
```

### Check file structure:
```bash
tree -L 3 src/app/
```

### Validate TypeScript:
```bash
npx tsc --noEmit
```

---

## Quick Fixes Summary

| Issue | Quick Fix |
|-------|-----------|
| Module not found | `rm -rf node_modules && npm install` |
| SCSS errors | Check `@use` comes before `@import` in `main.scss` |
| Path alias errors | Restart IDE after checking `tsconfig.json` |
| Port in use | `lsof -ti:4200 \| xargs kill -9` |
| Ionic errors | Import from `@ionic/angular/standalone` |
| Cache issues | `rm -rf .angular node_modules/.cache` |

---

## Success Indicators

When everything is working correctly, you should see:

✅ **Terminal output**:
```
✔ Browser application bundle generation complete.
** Angular Live Development Server is listening on localhost:4200 **
```

✅ **Browser**:
- Welcome page loads at `http://localhost:4200`
- Beautiful hero image displays
- Buttons are styled correctly
- Social login buttons appear
- No console errors

✅ **Features working**:
- Smooth animations
- Responsive layout
- Hover effects on buttons
- Click handlers logging to console

---

Need more help? Check:
- README.md for project overview
- SETUP_GUIDE.md for detailed setup
- COMPONENT_GUIDE.md for component usage
