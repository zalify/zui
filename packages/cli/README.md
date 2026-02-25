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
