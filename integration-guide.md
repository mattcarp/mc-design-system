# MAC Design System - Integration Guide

## 🚀 Quick Start (2 Minutes to Beauty)

### For New Projects
```bash
npm install @mac-design-system/core
# or
yarn add @mac-design-system/core
```

### CSS Integration
```css
/* Import the complete system */
@import '@mac-design-system/core/dist/mac.css';

/* Or import just what you need */
@import '@mac-design-system/tokens/colors.css';
@import '@mac-design-system/components/buttons.css';
```

### Tailwind Integration
```js
// tailwind.config.js
module.exports = {
  presets: [require('@mac-design-system/tailwind-preset')],
  // Your custom config
}
```

## 🎨 Design Tokens Available

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

## ⚡ Framework Integrations

### React
```jsx
import { Button, Card, Input } from '@mac-design-system/react'

function App() {
  return (
    <Card variant="elevated">
      <Input placeholder="Beautiful by default" />
      <Button variant="primary">Start Building</Button>
    </Card>
  )
}
```

### Vue
```vue
<template>
  <MacCard variant="glass">
    <MacInput placeholder="Élégant toujours" />
    <MacButton variant="primary">Commencer</MacButton>
  </MacCard>
</template>
```

### Pure HTML
```html
<div class="mac-card mac-card-elevated">
  <input class="mac-input" placeholder="No framework? No problem" />
  <button class="mac-button mac-button-primary">Pure Beauty</button>
</div>
```

## 🔧 Customization

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
