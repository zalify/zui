'use client'
import { useState } from 'react'
import { Stack } from 'styled-system/jsx'
import { Button, Skeleton, Text } from '@/components/ui'

export const App = () => {
  const [loading, setLoading] = useState(true)

  return (
    <Stack align="flex-start" gap="4">
      <Skeleton loading={loading}>
        <Text>ZUI rocks 🚀</Text>
      </Skeleton>
      <Button variant="surface" onClick={() => setLoading((c) => !c)}>
        Toggle
      </Button>
    </Stack>
  )
}
