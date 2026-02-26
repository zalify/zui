import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const distDir = resolve(root, 'dist')

const DIRECTIVE = '"use client";\n'
let added = 0

for (const file of readdirSync(distDir)) {
  if (!file.endsWith('.js') && !file.endsWith('.cjs')) continue

  const filePath = resolve(distDir, file)
  const content = readFileSync(filePath, 'utf-8')
  if (!content.startsWith('"use client"')) {
    writeFileSync(filePath, DIRECTIVE + content)
    console.log(`  Added "use client" to ${file}`)
    added++
  }
}

console.log(`Added "use client" to ${added} files`)
