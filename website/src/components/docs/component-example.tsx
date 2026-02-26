import { cache } from 'react'
import { Box } from 'styled-system/jsx'
import { getComponentSourceCode } from '~/app/docs/actions'
import { getServerContext } from '~/server-context'
import { CodePreviewTabs } from './code-preview-tabs'
import { CodeToggle } from './code-toggle'
import { ExampleRenderer } from './example-renderer'

interface Props {
  component?: string
  name: string
  codeOnly?: boolean
}

const getCachedComponentSourceCode = cache(getComponentSourceCode)

export const ComponentExample = async (props: Props) => {
  const { name, codeOnly } = props
  const ctx = getServerContext()

  const component = props.component ?? ctx.component

  const sources = await getCachedComponentSourceCode({
    component,
    name,
  })

  if (codeOnly) {
    return <CodePreviewTabs sources={sources} defaultValue="react" borderRadius="l3" />
  }

  return (
    <Box
      borderWidth="1px"
      borderRadius="l3"
      overflow="hidden"
      className="not-prose"
      mt="6"
      mb="12"
      divideY="1px"
    >
      <Box p={{ base: '4', md: '8' }} color={component === 'text' ? 'fg.default' : undefined}>
        <ExampleRenderer component={component} name={name} />
      </Box>
      <CodeToggle>
        <CodePreviewTabs
          defaultValue="react"
          sources={sources}
          borderRadius="0"
          borderWidth="0"
        />
      </CodeToggle>
    </Box>
  )
}
