'use client'
import { Button, toaster } from '@zalify-ui/react'

export const App = () => {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toaster.create({
          title: 'Title',
          description: 'Description',
          closable: true,
        })
      }
    >
      Add Toast
    </Button>
  )
}
