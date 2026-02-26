'use client'

import type { ReactNode } from 'react'
import { HStack } from 'styled-system/jsx'
import { Button, Collapsible, Text } from '@/components/ui'

interface Props {
  children: ReactNode
}

export const CodeToggle = (props: Props) => {
  return (
    <Collapsible.Root bg={{ _light: 'gray.2', _dark: 'gray.1' }} lazyMount>
      <HStack justify="space-between" px="3" minH="10">
        <Text textStyle="xs" fontWeight="medium" color="fg.muted">
          React
        </Text>
        <Collapsible.Trigger asChild>
          <Button size="xs" variant="plain">
            Toggle code
          </Button>
        </Collapsible.Trigger>
      </HStack>
      <Collapsible.Content>{props.children}</Collapsible.Content>
    </Collapsible.Root>
  )
}
