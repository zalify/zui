'use client'
import { useState } from 'react'
import { Button, Skeleton, Text, Stack } from '@zalify-ui/react'

export const App = () => {
  const [loading, setLoading] = useState(true)

  return (
    <Stack align="flex-start" gap="4">
      <Skeleton loading={loading}>
        <Text>Zalify UI rocks 🚀</Text>
      </Skeleton>
      <Button variant="surface" onClick={() => setLoading((c) => !c)}>
        Toggle
      </Button>
    </Stack>
  )
}
