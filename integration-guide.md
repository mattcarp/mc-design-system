# MAC Design System - Integration Guide

## Quick Start (2 Minutes to Beauty)

### For New Projects
Copy the CSS custom properties from `showcase/index.html` or extract the design tokens you need.

### CSS Integration
```css
/* Copy these design tokens into your project */
:root {
  --color-primary-blue-400: #3385ff;
  --color-primary-blue-600: #0052cc;
  --color-accent-purple-400: #8533ff;
  --color-accent-purple-600: #5200cc;
  --color-surface-background: #0a0a0a;
  --color-surface-elevated: #141414;
  --color-text-primary: #ffffff;
  --color-text-secondary: #b3b3b3;
  --color-text-muted: #666666;
  /* ... etc */
}
```

### Component Classes
Copy the component CSS classes from the showcase file, or use them as inspiration for your own implementations.

## Design Tokens Available

### Colors
- Primary Blues: `--mac-blue-400`, `--mac-blue-600`
- Accent Purples: `--mac-purple-400`, `--mac-purple-600`
- Surface Colors: `--mac-surface-bg`, `--mac-surface-elevated`
- Text Hierarchy: `--mac-text-primary`, `--mac-text-secondary`, `--mac-text-muted`

### Typography Scale
- Display: `text-display` (3.75rem, weight 100)
- Heading: `text-heading` (2.25rem, weight 200)
- Title: `text-title` (1.5rem, weight 300)
- Body: `text-body` (1rem, weight 300)

### Components Ready to Use
- Buttons: `.mac-button`, `.mac-button-primary`, `.mac-button-secondary`
- Cards: `.mac-card`, `.mac-card-elevated`, `.mac-card-glass`
- Forms: `.mac-input`, `.mac-textarea`, `.mac-toggle`

## Framework Integrations

### React
```jsx
// Copy the CSS classes and use them directly
function App() {
  return (
    <div className="mac-card mac-card-elevated">
      <input className="mac-input" placeholder="Beautiful by default" />
      <button className="mc-button mc-button-primary">Start Building</button>
    </div>
  )
}
```

### Vue
```vue
<template>
  <div class="mac-card mac-card-glass">
    <input class="mac-input" placeholder="Élégant toujours" />
    <button class="mc-button mc-button-primary">Commencer</button>
  </div>
</template>
```

### Pure HTML
```html
<div class="mac-card mac-card-elevated">
  <input class="mac-input" placeholder="No framework? No problem" />
  <button class="mac-button mac-button-primary">Pure Beauty</button>
</div>
```

## Customization

### Brand Colors Override
```css
:root {
  --mac-brand-primary: #your-color;
  --mac-brand-accent: #your-accent;
}
```

### Typography Override
```css
:root {
  --mac-font-family: 'Your Font', system-ui;
}
```
