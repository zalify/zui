# ZUI CLI

A command-line tool for integrating ZUI components into your project.

## Usage

### Initialize ZUI

Set up ZUI in your project with an interactive prompt:

```bash
npx zui init
```

This command will:
- Guide you through framework selection
- Let you choose accent and gray color themes
- Install the necessary theme configuration
- Set up the initial component structure

### Add Components

Add specific components to your project:

```bash
npx zui add button card dialog
```

Add all available components:

```bash
npx zui add --all
```

You can also add more Radix colors this way

```bash
npx zui add iris jade crimson
```

### Debug Configuration

View your current ZUI configuration:

```bash
npx zui debug
```

## Options

```bash
zui -v, --version    # Display version number
zui -h, --help       # Display help information
```

## Support

Report issues at: https://github.com/zalify/zui/issues

## Local testing without publishing

Use this flow to test the CLI in a demo app without publishing to npm.

For Next.js projects, Panda recommends initializing with PostCSS support:
`bun add -D @pandacss/dev && bun panda init --postcss`.

### One-command flow

From the repo root:

```bash
bun run cli:test:local
```

This will:
- build and pack `@zuish/cli`
- install the tarball into `playgrounds/next16-cli-demo`
- initialize Panda with `--postcss`
- run `zui init --default`
- add `button` and `card`
- run `panda codegen --clean`

If the demo app does not exist, create it once with:

```bash
npx create-next-app@16.1.6 "playgrounds/next16-cli-demo" --ts --app --use-npm --yes --import-alias "@/*"
```

```bash
# Set your repo root once per shell session
export REPO_ROOT="/path/to/zui"

# 1) Build and pack the local CLI
cd "$REPO_ROOT/packages/cli"
bun run build
npm pack
export CLI_TARBALL="$(pwd)/zuish-cli-<version>.tgz"

# 2) Install the local tarball in your demo app
cd "$REPO_ROOT/playgrounds/next16-cli-demo"
npm i -D "$CLI_TARBALL"

# 3) Run non-interactive init and add commands
npx panda init --force --jsx-framework react --postcss
npx zui init --default
npx zui add button
npx zui add card

# 4) Regenerate Panda output and verify recipe exports
npx panda codegen --clean
```

Expected results:
- `tsconfig.json` includes `baseUrl` and `styled-system/*` path mapping.
- `panda.config.ts` includes `jsxFramework`.
- `src/theme/recipes/index.ts` contains both `button` and `card`.
- `styled-system/recipes/index.mjs` exports both `button` and `card`.
