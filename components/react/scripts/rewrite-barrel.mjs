import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const srcIndex = resolve(root, 'src', 'components', 'ui', 'index.ts')
const distDir = resolve(root, 'dist')

const src = readFileSync(srcIndex, 'utf-8')

const exportPattern = /export\s+(\*\s+as\s+(\w+)|\{([^}]+)\})\s+from\s+['"]\.\/([^'"]+)['"]/g

const esmLines = []
const cjsLines = []

for (const match of src.matchAll(exportPattern)) {
  const modulePath = match[4]
  const nsName = match[2]
  const namedExports = match[3]

  if (nsName) {
    esmLines.push(`export * as ${nsName} from './${modulePath}.js';`)
    cjsLines.push(`exports.${nsName} = require('./${modulePath}.cjs');`)
  } else if (namedExports) {
    const names = namedExports
      .split(',')
      .map((n) => n.trim())
      .filter((n) => n && !n.startsWith('type '))

    if (names.length > 0) {
      esmLines.push(`export { ${names.join(', ')} } from './${modulePath}.js';`)

      const varName = `_${modulePath.replace(/-/g, '_')}`
      cjsLines.push(`var ${varName} = require('./${modulePath}.cjs');`)
      for (const name of names) {
        cjsLines.push(`exports.${name} = ${varName}.${name};`)
      }
    }
  }
}

const esmContent = '"use client";\n' + esmLines.join('\n') + '\n'
writeFileSync(resolve(distDir, 'index.js'), esmContent)
console.log(`Rewrote dist/index.js (${esmLines.length} re-exports from entry files)`)

const cjsContent = '"use client";\n"use strict";\n' + cjsLines.join('\n') + '\n'
writeFileSync(resolve(distDir, 'index.cjs'), cjsContent)
console.log(`Rewrote dist/index.cjs (CJS barrel)`)
