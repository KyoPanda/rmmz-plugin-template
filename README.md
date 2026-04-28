# RMMZ Plugin Template

A modern, production-ready TypeScript template for **RPG Maker MZ** plugins.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D20-brightgreen)

## Features

- **TypeScript** + **Rollup 4** → single clean `.js` plugin file
- `pluginName` field → clean PascalCase filename (separate from npm scoped name)
- Vitest + full test coverage
- ESLint (flat config) + Prettier
- Changesets for automated versioning & changelog
- GitHub Actions CI + Trusted Publishing to npm
- Auto-generated API documentation with TypeDoc
- Proper `.gitattributes`, `.npmignore`, and cross-platform support

## Quick Start

### 1. Use this template

Click **"Use this template"** on GitHub or clone it:

```bash
git clone https://github.com/KyoPanda/rmmz-plugin-template.git my-awesome-plugin
cd my-awesome-plugin
```

### 2. Install & configure

```bash
npm install
```

Edit `package.json`:

- Change `"name"` to your scoped npm name (`@yourname/my-plugin`)
- Set `"pluginName"` to your desired plugin filename (e.g. `MyPlugin`)
- Update `"namespace"`, `"description"`, etc.

Set your test project path:

```json
"testProjectDir": "../../MyGameProject"
```

### 3. Development

```bash
npm run build          # Build + copy to test project
npm test
npm run lint
npm run format
```

### 4. Documentation

```bash
npm run docs:markdown   # Generate API docs
```

Docs are automatically generated from JSDoc comments and committed via GitHub Actions.

## Project Structure

```text
├── src/
│   └── main.ts                 # Your plugin code
├── dist/                       # Built plugin (gitignored)
├── docs/api/                   # Auto-generated documentation
├── .changeset/                 # Versioning
├── plugin-metadata.yaml        # RPG Maker plugin header
├── rollup.config.mjs
├── typedoc.json
└── ...
```

## Releasing

- Create changesets with `npm run changeset`
- Merge to `main` → automatic version bump + publish to npm (Trusted Publishing)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

**Based on** the excellent [typescript-plugin-archetype](https://github.com/comuns-rpgmaker/typescript-plugin-archetype).

---

Made with ❤️ for the RPG Maker MZ community.
