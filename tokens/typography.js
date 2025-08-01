/**
 * MC Design System - Typography Tokens
 * Thin, light font weights (100-300) throughout
 * Professional hierarchy with excellent readability
 */

export const typography = {
  // Font families
  fonts: {
    display: 'system-ui, -apple-system, sans-serif',
    body: 'system-ui, -apple-system, sans-serif',
    mono: 'SF Mono, Monaco, monospace',
  },

  // Font weights - Emphasizing light weights
  weights: {
    thin: 100,        // Display text, hero headings
    extralight: 200,  // Large headings
    light: 300,       // Titles, body text
    normal: 400,      // Emphasis, buttons
  },

  // Type scale
  sizes: {
    xs: '0.75rem',    // 12px - Captions, labels
    sm: '0.875rem',   // 14px - Small text
    base: '1rem',     // 16px - Body text
    lg: '1.125rem',   // 18px - Large body
    xl: '1.25rem',    // 20px - Small headings
    '2xl': '1.5rem',  // 24px - Medium headings
    '3xl': '1.875rem', // 30px - Large headings
    '4xl': '2.25rem', // 36px - Extra large headings
    '5xl': '3rem',    // 48px - Display text
    '6xl': '3.75rem', // 60px - Hero text
  },

  // Line heights
  leading: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  }
};

// Typography CSS classes
export const typographyStyles = `
/* Display Text - Hero sections */
.text-display {
  font-size: ${typography.sizes['6xl']};
  font-weight: ${typography.weights.thin};
  line-height: ${typography.leading.tight};
  letter-spacing: -0.02em;
}

/* Extra Light Heading - Major sections */
.text-heading-xl {
  font-size: ${typography.sizes['4xl']};
  font-weight: ${typography.weights.extralight};
  line-height: ${typography.leading.tight};
}

/* Light Title - Component titles */
.text-title {
  font-size: ${typography.sizes['2xl']};
  font-weight: ${typography.weights.light};
  line-height: ${typography.leading.normal};
}

/* Body Text - Readable content */
.text-body {
  font-size: ${typography.sizes.base};
  font-weight: ${typography.weights.light};
  line-height: ${typography.leading.relaxed};
}
`;
