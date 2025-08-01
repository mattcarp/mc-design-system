/**
 * MC Design System - Spacing & Layout Tokens
 * Consistent spacing scale for layouts and components
 */

export const spacing = {
  // Base spacing scale (rem units)
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
};

export const layout = {
  // Border radius - Clean, modern curves
  radius: {
    none: '0',
    sm: '0.25rem',    // 4px - Small elements
    md: '0.5rem',     // 8px - Cards, buttons
    lg: '0.75rem',    // 12px - Large cards
    xl: '1rem',       // 16px - Modal, overlays
    full: '9999px',   // Pills, circular
  },

  // Container sizes
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index scale
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    dropdown: '1000',
    modal: '1050',
    tooltip: '1100',
  }
};
