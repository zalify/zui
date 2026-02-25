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

const defaultInitConfig = {
  framework: 'react' as const,
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
    Effect.flatMap(({ framework, accentColor, grayColor, borderRadius }) =>
      pipe(
        saveConfig(framework),
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
