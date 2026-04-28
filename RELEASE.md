# Release Process

This document describes the full release workflow for this template.

## Full Release Steps

```powershell
# 1. Make sure everything is clean
npm run format
npm run lint

# 2. Create a changeset (interactive)
npm run changeset

# 3. Bump version and update changelog
npm run version

# 4. Force lockfile synchronization (important!)
npm install --package-lock-only

# 5. Format again (in case changelog or version changed formatting)
npm run format

# 6. Build and publish to npm
npm run release

# 7. Safety commit (in case something wasn't committed)
git status
git add .
git commit -m "chore: version packages" --no-edit || true

# 8. Push commit + tags
git push --follow-tags
```

## Alternative One-liner (after creating the changeset)

```powershell
npm run version && npm install --package-lock-only && npm run format && npm run release && git push --follow-tags
```

---

### Notes

- Always run `npm run changeset` first (choose `patch` / `minor` / `major`).
- The `release` script already includes `npm install --package-lock-only` + build + publish.
- CI will automatically validate linting, tests, and build on every push.

---

Made with ❤️ for future maintenance of this template.
