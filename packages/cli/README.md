# Zalify UI CLI

A command-line tool for integrating Zalify UI components into your project.

## Usage

### Initialize Zalify UI

Set up Zalify UI in your project with an interactive prompt:

```bash
npx zalify-ui init
```

This command will:
- Guide you through framework selection
- Let you choose accent and gray color themes
- Install the necessary theme configuration
- Set up the initial component structure

### Add Components

Add specific components to your project:

```bash
npx zalify-ui add button card dialog
```

Add all available components:

```bash
npx zalify-ui add --all
```

You can also add more Radix colors this way

```bash
npx zalify-ui add iris jade crimson
```

### Debug Configuration

View your current Zalify UI configuration:

```bash
npx zalify-ui debug
```

## Options

```bash
zalify-ui -v, --version    # Display version number
zalify-ui -h, --help       # Display help information
```

## Support

Report issues at: https://github.com/zalify/zalify-ui/issues

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
- build and pack `@zalify-ui/cli`
- install the tarball into `playgrounds/next16-cli-demo`
- initialize Panda with `--postcss`
- run `zalify-ui init --default`
- add `button` and `card`
- run `panda codegen --clean`

If the demo app does not exist, create it once with:

```bash
npx create-next-app@16.1.6 "playgrounds/next16-cli-demo" --ts --app --use-npm --yes --import-alias "@/*"
```

```bash
# Set your repo root once per shell session
export REPO_ROOT="/path/to/zalify-ui"

# 1) Build and pack the local CLI
cd "$REPO_ROOT/packages/cli"
bun run build
npm pack
export CLI_TARBALL="$(pwd)/zalify-ui-cli-<version>.tgz"

# 2) Install the local tarball in your demo app
cd "$REPO_ROOT/playgrounds/next16-cli-demo"
npm i -D "$CLI_TARBALL"

# 3) Run non-interactive init and add commands
npx panda init --force --jsx-framework react --postcss
npx zalify-ui init --default
npx zalify-ui add button
npx zalify-ui add card

# 4) Regenerate Panda output and verify recipe exports
npx panda codegen --clean
```

Expected results:
- `tsconfig.json` includes `baseUrl` and `styled-system/*` path mapping.
- `panda.config.ts` includes `jsxFramework`.
- `src/theme/recipes/index.ts` contains both `button` and `card`.
- `styled-system/recipes/index.mjs` exports both `button` and `card`.
