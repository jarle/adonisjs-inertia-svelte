# Styling System

The application styling is split between a small shared foundation and local component styling.
This keeps the visual language consistent without turning styling into a global dependency.

## Purpose

- Shared styling defines the base look and feel of the product.
- Local styling lets each page and component stay readable and self-contained.
- Repeated visual patterns become reusable UI pieces instead of one-off global rules.

## System Shape

- The foundation owns design tokens, base element styling, theme behavior, and a small utility layer.
- Reusable visual building blocks live in shared UI and layout components.
- Page-specific layout and presentation stay close to the page that uses them.

## Theming

- The system supports light and dark presentation.
- The interface can follow the user device preference or an explicit application theme choice.
- Native browser controls are styled to match the selected theme.

## Guardrails

- Global styling stays small and foundational.
- Product-specific visuals belong in components, not in broad global selectors.
- New shared primitives are only added when a pattern is clearly reused across the product.
- Styling favors consistency through shared tokens instead of isolated hard-coded values.
