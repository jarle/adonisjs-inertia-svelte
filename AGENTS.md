# Agent Instructions

## Tech Stack

- Node.js
- AdonisJS
- Inertia.JS
- Svelte for frontend
- VineJS for validation
- Lucid icons

## TypeScript Usage

- The code base is in typescript and should be end-to-end type safe.
- Do not use typescript `as`, `any`, implicit `any` or introduce new types/interfaces. Prefer inline and derived types.
- Trust TypeScript's inference - avoid explicit type annotations:
  - Do not introduce additional types or interfaces just to fix lint errors - they need a functional reason to exist
  - Avoid type assertions with `as` - they bypass TypeScript's type checking and can introduce errors
  - Let TypeScript infer object shapes, function return types, and variable types
  - For generic functions like `make()`, let the return type be inferred from how the result is used
- When the compiler complains about types, look for a way to properly model the data flow rather than overriding the type checker. Stop and pass control to the user if you struggle with getting the types right.
