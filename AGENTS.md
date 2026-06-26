# Repository Guidelines

## Project Structure & Module Organization

Pnpm monorepo with workspaces declared in `pnpm-workspace.yaml`.

- `apps/web`: React 19 + Vite frontend. Source is in `apps/web/src`, assets in `apps/web/public`, and output in `apps/web/dist`.
- `apps/api`: NestJS API. Code is in `apps/api/src`, unit tests sit beside source as `*.spec.ts`, and e2e tests live in `apps/api/test`.
- `packages/shared`: shared workspace package exported as `@code-connect/shared`.
- Root files define scripts and dependency resolution.

## Build, Test, and Development Commands

Use `./pnpm` from the root.

- `./pnpm dev`: run all package dev scripts in parallel with streamed output.
- `./pnpm build`: build every workspace package recursively.
- `./pnpm web:dev`: start the Vite frontend only.
- `./pnpm web:build` / `./pnpm web:lint`: build or lint web.
- `./pnpm api:dev`: start the NestJS API in watch mode.
- `./pnpm api:build` / `./pnpm api:lint`: build or lint API.
- `./pnpm api:test` / `./pnpm api:test:e2e`: run API unit or e2e tests.

## Coding Style & Naming Conventions

Write TypeScript. Use `PascalCase` for React components (`App.tsx`) and NestJS suffixes such as `Controller`, `Service`, and `Module`.

In `apps/web`, organize UI with Atomic Design (`atoms`, `molecules`, `organisms`, `templates`, and pages). Use Tailwind CSS for new styling.

In `apps/api`, keep endpoints REST-compliant: resource-oriented routes, correct HTTP methods, meaningful status codes, DTO validation, and no action verbs in URLs when a resource model fits.

The API uses Prettier with single quotes and trailing commas. Run `./pnpm -C apps/api format` for API edits.

## Testing Guidelines

API unit tests use Jest with `*.spec.ts` under `apps/api/src`. E2E tests use `apps/api/test/jest-e2e.json` and `*.e2e-spec.ts`.

Add or update tests for changed API behavior. Every frontend component must include a test for essential usage: main render state, required props, and primary interaction when applicable. Until a web test script exists, validate frontend changes with `./pnpm web:build` and `./pnpm web:lint`.

## Commit & Pull Request Guidelines

Use Conventional Commits for frontend and backend changes: `feat(web): add profile card`, `fix(api): return 404 for missing user`, or `test(web): cover button click`. Prefer scopes such as `web`, `api`, `shared`, or the affected feature.

Pull requests should include a summary, relevant test results, linked issues when applicable, and screenshots or recordings for UI changes.

## Agent-Specific Instructions

Do not edit generated output in `apps/web/dist` or `apps/api/dist` unless required. Prefer workspace scripts so dependency and lockfile changes stay consistent.
