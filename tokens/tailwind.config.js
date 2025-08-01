import { colors } from './colors.js';

/**
 * Tailwind CSS Configuration for MC Design System
 * Extends default Tailwind with our design tokens
 */
export const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        'primary-blue': {
          400: colors.primary.blue400,
          600: colors.primary.blue600,
        },
        
        // Accent colors
        'accent-purple': {
          400: colors.accent.purple400,
          600: colors.accent.purple600,
        },
        
        // Surface colors
        'surface': {
          bg: colors.surface.background,
          elevated: colors.surface.elevated,
        },
        
        // Text colors
        'text': {
          primary: colors.text.primary,
          secondary: colors.text.secondary,
          muted: colors.text.muted,
        },
        
        // Utility colors
        'border': {
          DEFAULT: colors.utility.border,
          elevated: colors.utility.borderElevated,
        }
      },
      
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
      },
      
      boxShadow: {
        'card': `0 4px 12px ${colors.utility.shadow}`,
        'elevated': `0 8px 24px ${colors.utility.shadow}`,
      }
    }
  }
};
