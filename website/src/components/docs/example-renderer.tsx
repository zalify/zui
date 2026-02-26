'use client'

import { getComponentExample } from '~/lib/examples'
import { ErrorBoundary } from '../error-boundary'

interface Props {
  component: string
  name: string
}

export const ExampleRenderer = ({ component, name }: Props) => {
  const Example = getComponentExample({ component, name })
  if (!Example) return null
  return (
    <ErrorBoundary componentName={name}>
      <Example />
    </ErrorBoundary>
  )
}
