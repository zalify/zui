import type { PropsWithChildren, ReactElement } from 'react'
import type { SourceCode } from '~/lib/frameworks'
import { CodeSnippet } from '../docs/code-snippet'

interface CodeProps {
  className?: string
  children: string
  'data-multi'?: boolean
}

interface PreProps extends PropsWithChildren {
  children?: ReactElement<CodeProps>
}

export const Pre = async ({ children }: PreProps) => {
  if (!children?.props) return null

  const { className, children: code } = children.props
  const lang = (className?.replace('language-', '') ?? 'tsx') as SourceCode['lang']
  const codeString = code?.toString() ?? ''

  const sourceCode: SourceCode = { code: codeString, lang }

  return <CodeSnippet sourceCode={sourceCode} />
}
