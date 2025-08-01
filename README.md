# MC Design System

A professional dark design system with blue and purple accents. Clean, modern, and built to last across projects and years of development.

## Philosophy

- **No Linear Gradients**: Clean, solid colors throughout
- **Light Typography**: Thin, elegant font weights (100-300)
- **Dark First**: Professional dark theme with strategic light accents
- **Minimalist**: Maximum information density with minimal visual clutter
- **Consistent**: Single source of truth for all design decisions

## Structure

```
mc-design-system/
├── tokens/           # Design tokens (colors, typography, spacing)
├── showcase/         # Living style guide & AI context reference
├── components/       # Reusable UI components
├── patterns/         # Layout patterns & templates
└── docs/            # Documentation & guidelines
```

## Usage

### As AI Context Reference
Reference the showcase page (`showcase/index.html`) in AI tools for consistent design application across projects.

### Design Tokens
```javascript
import { colors, typography, spacing } from './tokens/index.js';

// Use in your projects
const primaryColor = colors.primary.blue400;
```

### Tailwind Integration
```javascript
import { tailwindConfig } from './tokens/tailwind.config.js';
// Extend your Tailwind config with MC Design System tokens
```

## Colors

### Primary Blues
- **Blue 400**: `#3385ff` - Main brand color
- **Blue 600**: `#0052cc` - Darker brand variant

### Accent Purples  
- **Purple 400**: `#8533ff` - Interactive elements
- **Purple 600**: `#5200cc` - Primary buttons, focus states

### Surface Colors
- **Background**: `#0a0a0a` - Main background
- **Elevated**: `#141414` - Cards, modals, elevated surfaces

## Typography

- **Display Text**: 60px, Thin (100) - Hero sections
- **Extra Light Heading**: 36px, Extra Light (200) - Major sections  
- **Light Title**: 24px, Light (300) - Component titles
- **Body Text**: 16px, Light (300) - Readable content

## Getting Started

1. Clone this repository to your projects directory
2. Reference `showcase/index.html` in AI tools for design consistency
3. Import tokens into your projects as needed
4. Customize and extend while maintaining core principles

---

*Built for longevity, consistency, and beautiful user experiences.*
