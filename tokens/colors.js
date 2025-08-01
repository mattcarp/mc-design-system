/**
 * MC Design System - Color Tokens
 * Professional dark design system with blue and purple accents
 * No linear gradients, clean and modern aesthetic
 */

export const colors = {
  // Primary Blues - Main brand colors
  primary: {
    blue400: '#3385ff',
    blue600: '#0052cc',
  },

  // Accent Purples - Highlight and interactive elements
  accent: {
    purple400: '#8533ff',
    purple600: '#5200cc',
  },

  // Surface Colors - Backgrounds and containers
  surface: {
    background: '#0a0a0a',  // Pure dark background
    elevated: '#141414',    // Cards, modals, elevated surfaces
  },

  // Text Colors - Typography hierarchy
  text: {
    primary: '#ffffff',     // Main headings, important text
    secondary: '#b3b3b3',   // Body text, descriptions
    muted: '#666666',       // Subtle text, placeholders
  },

  // Utility Colors
  utility: {
    border: 'rgba(255, 255, 255, 0.1)',      // Subtle borders
    borderElevated: 'rgba(255, 255, 255, 0.2)', // Elevated borders
    shadow: 'rgba(0, 0, 0, 0.5)',            // Box shadows
  },

  // State Colors
  state: {
    hover: 'rgba(255, 255, 255, 0.05)',      // Hover backgrounds
    focus: '#3385ff',                         // Focus rings
    disabled: '#333333',                      // Disabled elements
  }
};

// CSS Custom Properties for direct usage
export const cssVariables = `
:root {
  /* Primary Blues */
  --color-primary-blue-400: ${colors.primary.blue400};
  --color-primary-blue-600: ${colors.primary.blue600};
  
  /* Accent Purples */
  --color-accent-purple-400: ${colors.accent.purple400};
  --color-accent-purple-600: ${colors.accent.purple600};
  
  /* Surface Colors */
  --color-surface-background: ${colors.surface.background};
  --color-surface-elevated: ${colors.surface.elevated};
  
  /* Text Colors */
  --color-text-primary: ${colors.text.primary};
  --color-text-secondary: ${colors.text.secondary};
  --color-text-muted: ${colors.text.muted};
  
  /* Utility Colors */
  --color-utility-border: ${colors.utility.border};
  --color-utility-border-elevated: ${colors.utility.borderElevated};
  --color-utility-shadow: ${colors.utility.shadow};
  
  /* State Colors */
  --color-state-hover: ${colors.state.hover};
  --color-state-focus: ${colors.state.focus};
  --color-state-disabled: ${colors.state.disabled};
}
`;
