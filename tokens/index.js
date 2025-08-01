/**
 * MC Design System - Design Tokens
 * Export all design tokens for easy consumption
 */

export { colors, cssVariables } from './colors.js';
export { typography, typographyStyles } from './typography.js';
export { spacing, layout } from './spacing.js';
export { tailwindConfig } from './tailwind.config.js';

// Combined CSS for direct usage
export const allStyles = `
/* Import all design tokens as CSS custom properties */
${cssVariables}

/* Typography styles */
${typographyStyles}

/* Base body styles */
body {
  font-family: system-ui, -apple-system, sans-serif;
  background-color: var(--color-surface-background);
  color: var(--color-text-primary);
  font-weight: 300;
  line-height: 1.5;
}

/* Smooth focus transitions */
*:focus {
  outline: 2px solid var(--color-state-focus);
  outline-offset: 2px;
}
`;
