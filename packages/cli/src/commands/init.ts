import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import fsExtra from 'fs-extra'
import { join } from 'node:path'
import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect, Layer, pipe, Schema } from 'effect'
import color from 'picocolors'
import { Config, ConigSchema, saveConfig } from '~/utils/config'
import { install } from '~/utils/install'
import { updatePandaConfig, withPandaConfig } from '~/utils/panda-config'
import { promptInitConfig } from '~/utils/prompt'
import { fetchRegistryItems } from '~/utils/registry-client'
import { ensureTSConfigPaths, withTSConfig } from '~/utils/tsconfig'

type PackageManager = 'npm' | 'pnpm'

const PANDA_INCLUDE_LINE =
  "include: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/app/**/*.{ts,tsx,js,jsx}'],"
const GLOBALS_CONTENT = '@layer reset, base, tokens, recipes, utilities;\n'

const setupPanda = (packageManager: PackageManager) =>
  Effect.try({
    try: () => {
      // Skip if panda is already initialized — makes zui init idempotent
      // and avoids package manager errors in workspaces (e.g. workspace: protocol)
      if (existsSync(join(process.cwd(), 'panda.config.ts'))) return

      const commandsByPackageManager: Record<PackageManager, string[]> = {
        npm: [
          'npm install @ark-ui/react lucide-react',
          'npm install -D @pandacss/dev',
          'npx panda init --postcss',
        ],
        pnpm: [
          'pnpm install @ark-ui/react lucide-react',
          'pnpm install -D @pandacss/dev',
          'pnpm panda init --postcss',
        ],
      }

      for (const command of commandsByPackageManager[packageManager]) {
        execSync(command, { stdio: 'inherit' })
      }
    },
    catch: () => new Error('Failed to install dependencies and initialize Panda CSS.'),
  })

const updateGeneratedPandaFiles = () =>
  Effect.tryPromise({
    try: async () => {
      const pandaConfigPath = join(process.cwd(), 'panda.config.ts')
      const globalsPath = join(process.cwd(), 'src', 'app', 'globals.css')
      const currentPandaConfig = await fsExtra.readFile(pandaConfigPath, 'utf8')
      const includePattern = /include:\s*\[[\s\S]*?\],?/
      const nextPandaConfig = currentPandaConfig.replace(includePattern, PANDA_INCLUDE_LINE)

      if (nextPandaConfig !== currentPandaConfig) {
        await fsExtra.writeFile(pandaConfigPath, nextPandaConfig, 'utf8')
      }

      await fsExtra.outputFile(globalsPath, GLOBALS_CONTENT, 'utf8')
    },
    catch: () => new Error('Failed to update panda.config.ts and src/app/globals.css.'),
  })

const defaultInitConfig = {
  framework: 'react' as const,
  packageManager: 'npm' as const,
  accentColor: 'jade',
  grayColor: 'neutral',
  borderRadius: {
    theme: {
      extend: {
        semanticTokens: {
          radii: {
            l1: { value: '{radii.xs}' },
            l2: { value: '{radii.sm}' },
            l3: { value: '{radii.md}' },
          },
        },
      },
    },
  },
}

export const init = new Command('init')
  .description('initialize zui in your project')
  .option('--default', 'use default init values without prompts', false)
  .action(async (opts) => {
    p.intro(`${color.bgCyan(color.black(' ZUI '))}`)

    const initConfig = opts.default ? Effect.succeed(defaultInitConfig) : promptInitConfig()

    const program = initConfig.pipe(
      Effect.flatMap(({ framework, packageManager, accentColor, grayColor, borderRadius }) =>
        pipe(
          setupPanda(packageManager),
          Effect.flatMap(() => saveConfig(framework)),
          Effect.flatMap((config) => Schema.decodeUnknown(ConigSchema)(config)),
          Effect.flatMap((config) =>
            pipe(
              Effect.all([
                fetchRegistryItems({ ids: ['__init', accentColor, grayColor] }).pipe(
                  Effect.flatMap((items) => Effect.all(items.map(install))),
                ),
                ensureTSConfigPaths(),
                updatePandaConfig({
                  extension: {
                    jsxFramework: framework,
                    ...borderRadius,
                  },
                }),
              ]),
              Effect.provide(Layer.effect(Config, Effect.succeed(config))),
              Effect.flatMap(() => updateGeneratedPandaFiles()),
            ),
          ),
        ),
      ),
      Effect.tap(() => p.outro(`ZUI has been initialized successfully! 🎉`)),
      Effect.catchAll(() =>
        Effect.sync(() => {
          p.log.error('An error occurred while initializing ZUI.')
          p.outro(
            `You can report this issue at: ${color.underline(color.cyan('https://github.com/zalify/zui/issues'))}`,
          )
        }),
      ),
    )

    await Effect.runPromise(withPandaConfig(withTSConfig(program)))
  })
