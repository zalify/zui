'use server'

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { cacheLife } from 'next/cache'
import type { Framework } from './frameworks'

interface Props {
  component: string
  example: string
  framework: Framework
}

export const getComponentExampleSourceCode = async (props: Props) => {
  'use cache'
  cacheLife('max')

  const { component, example, framework } = props

  const baseDir = join(process.cwd(), '../components')
  const lang = 'tsx'

  const fileName = `${example}.${lang}`
  const path = join(baseDir, framework, 'src/examples', component, fileName)
  const code = await readFile(path, 'utf-8').catch(() => null)

  return code
}
