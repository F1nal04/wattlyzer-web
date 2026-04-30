# AGENTS.md

This file provides guidance to AI Agents when working with code in this repository.

## Git

commit should follow the conventional commits with scope scheme.

`feat(ui): added loading skeletons`

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
