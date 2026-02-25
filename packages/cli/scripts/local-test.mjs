#!/usr/bin/env node
import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const cliDir = path.resolve(__dirname, '..')
const repoRoot = path.resolve(cliDir, '..', '..')
const demoDir = path.join(repoRoot, 'playgrounds', 'next16-cli-demo')

const run = (command, cwd) => {
  console.log(`\n$ ${command}`)
  execSync(command, { cwd, stdio: 'inherit' })
}

const assertExists = (relativePath, message) => {
  const fullPath = path.join(demoDir, relativePath)
  if (!existsSync(fullPath)) {
    console.error(`\nValidation failed: ${message}`)
    console.error(`Missing: ${fullPath}`)
    process.exit(1)
  }
}

const getLatestTarball = () => {
  const output = execSync('npm pack --silent', { cwd: cliDir, encoding: 'utf8' })
  return output
    .trim()
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .at(-1)
}

if (!existsSync(demoDir)) {
  console.error(`Demo app not found at: ${demoDir}`)
  console.error(
    'Create it first with: npx create-next-app@16.1.6 "playgrounds/next16-cli-demo" --ts --app --use-npm --yes --import-alias "@/*"',
  )
  process.exit(1)
}

run('bun run build', cliDir)
const tarball = getLatestTarball()

if (!tarball) {
  console.error('Failed to create CLI tarball via npm pack.')
  process.exit(1)
}

const tarballPath = path.join(cliDir, tarball)
console.log(`Using tarball: ${tarballPath}`)

run(`npm i -D "${tarballPath}"`, demoDir)
run('npx panda init --force --jsx-framework react --postcss', demoDir)
run('npx zui init --default', demoDir)
assertExists('components.json', '`zui init --default` did not generate components.json')
run('npx zui add button', demoDir)
assertExists('src/components/ui/button.tsx', '`zui add button` did not generate button component')
run('npx zui add card', demoDir)
assertExists('src/components/ui/card.tsx', '`zui add card` did not generate card component')
run('npx panda codegen --clean', demoDir)
assertExists(
  'styled-system/recipes/index.mjs',
  '`panda codegen --clean` did not generate styled-system recipes index',
)

console.log('\nLocal CLI demo flow completed successfully.')
