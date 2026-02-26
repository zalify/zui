import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '..', 'dist')

let totalFixed = 0

function findBalancedClose(str, startIdx) {
  let depth = 0
  for (let i = startIdx; i < str.length; i++) {
    if (str[i] === '<') depth++
    else if (str[i] === '>') {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

function fixUndefinedTypes(content) {
  const marker = 'undefined<'
  let result = ''
  let i = 0

  while (i < content.length) {
    const idx = content.indexOf(marker, i)
    if (idx === -1) {
      result += content.slice(i)
      break
    }

    result += content.slice(i, idx)

    const openIdx = idx + 'undefined'.length
    const closeIdx = findBalancedClose(content, openIdx)
    if (closeIdx === -1) {
      result += content.slice(idx)
      break
    }

    const inner = content.slice(openIdx + 1, closeIdx)

    const frefMarker = 'react.ForwardRefExoticComponent<'
    if (inner.startsWith(frefMarker)) {
      const frefOpenIdx = frefMarker.length
      const frefCloseIdx = findBalancedClose(inner, frefOpenIdx - 1)
      if (frefCloseIdx !== -1) {
        const componentType = inner.slice(0, frefCloseIdx + 1)
        result += componentType
        totalFixed++
      } else {
        result += inner
      }
    } else {
      result += inner
    }

    i = closeIdx + 1
  }

  return result
}

for (const file of readdirSync(distDir)) {
  if (!file.endsWith('.d.ts') && !file.endsWith('.d.cts')) continue

  const filePath = resolve(distDir, file)
  const content = readFileSync(filePath, 'utf-8')

  if (!content.includes('undefined<')) continue

  const fixed = fixUndefinedTypes(content)

  if (fixed !== content) {
    writeFileSync(filePath, fixed)
    console.log(`  Fixed undefined<> types in ${file}`)
  }
}

console.log(`Fixed ${totalFixed} total broken type declarations`)
