/**
 * MC Design System - Form Components
 * Elegant input fields with thoughtful interactions
 */

export const formStyles = `
/* Base Input - Foundation for form elements */
.mc-input {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--color-surface-elevated);
  border: 1px solid var(--color-utility-border);
  border-radius: 0.5rem;
  color: var(--color-text-primary);
  font-family: system-ui, -apple-system, sans-serif;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.5;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.mc-input::placeholder {
  color: var(--color-text-muted);
  font-weight: 300;
}

.mc-input:focus {
  outline: none;
  border-color: var(--color-primary-blue-400);
  box-shadow: 0 0 0 3px rgba(51, 133, 255, 0.1);
  background-color: var(--color-surface-background);
}

.mc-input:hover:not(:focus) {
  border-color: var(--color-utility-border-elevated);
}

.mc-input:disabled {
  background-color: var(--color-state-disabled);
  color: var(--color-text-muted);
  cursor: not-allowed;
}

/* Input with Error State */
.mc-input.error {
  border-color: #ff4444;
}

.mc-input.error:focus {
  box-shadow: 0 0 0 3px rgba(255, 68, 68, 0.1);
}

/* Input with Success State */
.mc-input.success {
  border-color: #00cc66;
}

/* Textarea Variant */
.mc-textarea {
  min-height: 6rem;
  resize: vertical;
}

/* Select Dropdown */
.mc-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23666666' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1rem;
  padding-right: 2.5rem;
  appearance: none;
}

/* Input Group - Label + Input combination */
.mc-input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.mc-label {
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--color-text-primary);
  margin-bottom: 0.25rem;
}

.mc-help-text {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-weight: 300;
}

.mc-error-text {
  font-size: 0.75rem;
  color: #ff4444;
  font-weight: 300;
}

/* Checkbox and Radio Styles */
.mc-checkbox,
.mc-radio {
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid var(--color-utility-border-elevated);
  background-color: var(--color-surface-elevated);
  transition: all 0.2s ease;
  cursor: pointer;
}

.mc-checkbox {
  border-radius: 0.25rem;
}

.mc-radio {
  border-radius: 50%;
}

.mc-checkbox:checked,
.mc-radio:checked {
  background-color: var(--color-accent-purple-600);
  border-color: var(--color-accent-purple-600);
}

.mc-checkbox:checked::after {
  content: '✓';
  display: block;
  text-align: center;
  color: white;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.mc-radio:checked::after {
  content: '';
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: white;
  margin: 0.25rem auto;
}

/* Toggle Switch */
.mc-toggle {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
}

.mc-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.mc-toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-state-disabled);
  transition: 0.2s;
  border-radius: 1.5rem;
}

.mc-toggle-slider:before {
  position: absolute;
  content: "";
  height: 1.125rem;
  width: 1.125rem;
  left: 0.1875rem;
  bottom: 0.1875rem;
  background-color: white;
  transition: 0.2s;
  border-radius: 50%;
}

.mc-toggle input:checked + .mc-toggle-slider {
  background-color: var(--color-accent-purple-600);
}

.mc-toggle input:checked + .mc-toggle-slider:before {
  transform: translateX(1.5rem);
}
`;
