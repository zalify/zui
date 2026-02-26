import type { FrameworkSourceCode } from '~/lib/frameworks'
import { CodeSnippet } from './code-snippet'

interface Props {
  sources: FrameworkSourceCode[]
  defaultValue?: string
  borderRadius?: string
  borderWidth?: string
}

export const CodePreviewTabs = (props: Props) => {
  const { sources, borderRadius = 'l3', borderWidth = '1px' } = props
  const source = sources.find((s) => s.sourceCode)

  if (!source?.sourceCode) return null

  return (
    <CodeSnippet
      sourceCode={source.sourceCode}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      my="0"
    />
  )
}
