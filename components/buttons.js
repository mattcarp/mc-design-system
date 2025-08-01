/**
 * MC Design System - Button Components
 * Professional button variants with elegant interactions
 */

import { colors } from '../tokens/colors.js';

export const buttonStyles = `
/* Base Button - Foundation for all variants */
.mc-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-family: system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.2;
  border: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  user-select: none;
  position: relative;
  overflow: hidden;
}

.mc-button:focus {
  outline: 2px solid var(--color-state-focus);
  outline-offset: 2px;
}

.mc-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Primary Button - Purple accent, high emphasis */
.mc-button-primary {
  background-color: var(--color-accent-purple-600);
  color: var(--color-text-primary);
}

.mc-button-primary:hover:not(:disabled) {
  background-color: var(--color-accent-purple-400);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(82, 0, 204, 0.3);
}

.mc-button-primary:active {
  transform: translateY(0);
}

/* Secondary Button - Elevated surface, medium emphasis */
.mc-button-secondary {
  background-color: var(--color-surface-elevated);
  color: var(--color-text-primary);
  border: 1px solid var(--color-utility-border-elevated);
}

.mc-button-secondary:hover:not(:disabled) {
  background-color: var(--color-state-hover);
  border-color: var(--color-primary-blue-400);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px var(--color-utility-shadow);
}

.mc-button-secondary:active {
  transform: translateY(0);
}

/* Outline Button - Transparent, low emphasis */
.mc-button-outline {
  background-color: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-utility-border-elevated);
}

.mc-button-outline:hover:not(:disabled) {
  background-color: var(--color-state-hover);
  border-color: var(--color-primary-blue-400);
}

/* Ghost Button - Minimal, subtle interaction */
.mc-button-ghost {
  background-color: transparent;
  color: var(--color-text-secondary);
  border: none;
  padding: 0.5rem 1rem;
}

.mc-button-ghost:hover:not(:disabled) {
  background-color: var(--color-state-hover);
  color: var(--color-text-primary);
}

/* Size Variants */
.mc-button-sm {
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
}

.mc-button-lg {
  padding: 1rem 2rem;
  font-size: 1rem;
}

/* Icon Button Support */
.mc-button-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.mc-button-icon-only {
  padding: 0.75rem;
  width: auto;
  aspect-ratio: 1;
}
`;
