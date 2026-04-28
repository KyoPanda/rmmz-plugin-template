# Contributing to RMMZ Plugin Template

Thank you for considering contributing to this template!

## Development Setup

1. Clone the repository
2. Run `npm install`
3. (Optional) Set your test project in `package.json` → `"testProjectDir"`
4. Run `npm run build` — the plugin will be copied to your test project

## Available Scripts

- `npm run build` — Build the plugin (production)
- `npm run lint` / `npm run lint:fix` — Lint the code
- `npm run format` — Format with Prettier
- `npm test` — Run tests
- `npm run changeset` — Create a version changeset

## Pull Request Guidelines

- Please run `npm run lint && npm run format` before submitting
- Add or update tests when applicable
- Update `CHANGELOG.md` via Changesets (`npm run changeset`)
- Keep the plugin filename clean (PascalCase via `pluginName`)

## Releasing

Releases are automated via GitHub Actions + Changesets when merging to `main`.
