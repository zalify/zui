'use client'
import { Button, toaster, Wrap } from '@zalify-ui/react'

export const App = () => {
  const types = ['success', 'error', 'warning', 'info'] as const

  return (
    <Wrap gap="4">
      {types.map((type) => (
        <Button
          variant="outline"
          key={type}
          onClick={() =>
            toaster.create({
              title: `Toast status is ${type}`,
              type: type,
              duration: 40000,
            })
          }
        >
          {type}
        </Button>
      ))}
    </Wrap>
  )
}
