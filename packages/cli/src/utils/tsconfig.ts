import path from 'node:path'
import * as p from '@clack/prompts'
import { Context, Effect, Layer, Schema } from 'effect'
import { parse } from 'tsconfck'
import { TSConfigInvalid, TSConfigNotFound } from './errors'
import { PandaConfig } from './panda-config'

const TSConfigSchema = Schema.Struct({
  compilerOptions: Schema.Struct({
    paths: Schema.Record({
      key: Schema.String,
      value: Schema.mutable(Schema.Array(Schema.String)),
    }),
  }),
})

type TSConfigSchema = Schema.Schema.Type<typeof TSConfigSchema>

export interface TSConfig {
  aliasPrefix: string
  baseUrl: string
  paths: Record<string, string[]>
}

const getConfig = PandaConfig.pipe(
  Effect.flatMap((pandaConfig) =>
    Effect.tryPromise({
      try: () => parse(pandaConfig.path),
      catch: () => TSConfigNotFound(process.cwd()),
    }),
  ),
  Effect.flatMap((config) =>
    Schema.decodeUnknown(TSConfigSchema)(config.tsconfig).pipe(
      Effect.map((tsconfig) => ({ tsconfig, baseUrl: getBaseUrl(config) })),
    ),
  ),
  Effect.flatMap(({ tsconfig, baseUrl }) => {
    const aliasPrefix = getTsConfigAliasPrefix(tsconfig)
    if (!aliasPrefix) return Effect.fail(TSConfigInvalid())

    return Effect.succeed({
      aliasPrefix,
      baseUrl,
      paths: tsconfig.compilerOptions.paths,
    })
  }),
)

export const TSConfig = Context.GenericTag<TSConfig>('TSConfig')
const ConfigLayer = Layer.effect(TSConfig, getConfig)

export const withTSConfig = <A, R>(effect: Effect.Effect<A, never, R>) =>
  Effect.provide(effect, ConfigLayer).pipe(
    Effect.catchAll(({ message }) =>
      Effect.sync(() => {
        p.log.error(message)
        p.outro('Visit https://zui.sh/docs/installation to learn how to get started.')
      }),
    ),
  )

const getTsConfigAliasPrefix = (tsConfig: TSConfigSchema): string | null => {
  const paths = tsConfig.compilerOptions.paths
  const commonPaths = ['./*', './src/*', './app/*', './resources/js/*']

  for (const [alias, pathList] of Object.entries(paths)) {
    if (pathList.some((p) => commonPaths.includes(p))) {
      return alias.replace(/\/\*$/, '')
    }
  }

  return Object.keys(paths)[0]?.replace(/\/\*$/, '') ?? null
}

const getBaseUrl = (config: { tsconfig: unknown; tsconfigFile: string }) => {
  const compilerOptions = (config.tsconfig as { compilerOptions?: { baseUrl?: unknown } })
    .compilerOptions

  const baseUrl = typeof compilerOptions?.baseUrl === 'string' ? compilerOptions.baseUrl : '.'

  return path.resolve(path.dirname(config.tsconfigFile), baseUrl)
}
