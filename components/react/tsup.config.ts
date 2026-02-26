import { readdirSync } from 'node:fs'
import { defineConfig } from 'tsup'

const componentDir = 'src/components/ui'
const entry: Record<string, string> = {}

for (const file of readdirSync(componentDir)) {
  if (!file.endsWith('.tsx') && !file.endsWith('.ts')) continue
  const name = file.replace(/\.tsx?$/, '')
  entry[name] = `${componentDir}/${file}`
}

export default defineConfig({
  entry,
  format: ['esm', 'cjs'],
  tsconfig: 'tsconfig.build.json',
  dts: true,
  splitting: false,
  treeshake: true,
  clean: true,
  external: ['react', 'react-dom', /^@ark-ui\/react/, /^lucide-react/],
  esbuildOptions(options) {
    options.alias = { 'styled-system': './styled-system' }
    options.resolveExtensions = ['.mjs', '.tsx', '.ts', '.jsx', '.js', '.json']
    options.jsx = 'automatic'
    options.jsxImportSource = 'react'
  },
})
