## OS Gurus Boilerplate

Clone this as a template for new node packages, to make use of:
  - Automatic publishing workflows with semantic releases.
  - Typescript, eslint and jest preconfigured.

### Setup

1. In the GitHub repo settings, add `NPM_TOKEN` to secrets. Required for publishing workflows.
2. Find/replace references to `YOUR_PROJECT`, `YOUR_DESCRIPTION`, `YOUR_NAME`, `YOUR_EMAIL`.
3. Use the commit message `feat: Initial release` to trigger first semantic version publishing.

### Conventions

- Use conventional commits to trigger semantic versioning, publishing workflows and changelogs.
- Use squash merging only to bring branch work into trunk. Branch commits can be unconventional.
- Keep `*.test.ts` files as siblings to covered `*.ts` files, use `/test` only for test utils.
