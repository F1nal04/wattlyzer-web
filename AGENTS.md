# AGENTS.md

This file provides guidance to AI Agents when working with code in this repository.

## Git Commits

Use [Conventional Commits](https://www.conventionalcommits.org/) with a scope.

**Format:** `<type>(<scope>): <description>`

**Examples:**

- `feat(ui): add dark mode toggle`
- `fix(auth): handle expired token edge case`
- `chore(deps): bump react to v19`
- `refactor(api): simplify error handling middleware`

Do not add `Co-authored-by` trailers to commits.

## Commands

Use `bun` as the package manager (Node >= 22.12.0 required):

```bash
bun dev        # Start dev server
bun build      # Production build
bun preview    # Preview production build
bun astro      # Astro CLI access
```

## Design

Use `shadcn` components where applicable

## Architecture

Fresh Astro 6.x project with no framework integrations (no React/Vue/Svelte). Uses TypeScript in strict mode and plain CSS.

**src/ layout:**

- `pages/` — file-based routing; each `.astro` file becomes a route
- `layouts/` — wrapping HTML shells (slot-based composition)
- `components/` — reusable `.astro` components
- `assets/` — imported static assets (processed by Astro's build pipeline)
- `public/` — files served as-is (not processed)

Astro component syntax uses a frontmatter block (`---`) for server-side TypeScript, followed by the template. Components do not ship JavaScript to the client by default.

## MCP Servers

`.mcp.json` configures the following MCP servers for development assistance:

- `context7` — library documentation lookup
- `playwright` — browser automation/testing
- `astro-docs` — Astro framework documentation
- `shadcn` — shadcn/ui component library reference
