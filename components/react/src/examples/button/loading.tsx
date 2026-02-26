import { Button, Wrap } from '@zalify-ui/react'

export const App = () => {
  return (
    <Wrap gap="4">
      <Button loading>Click me</Button>
      <Button loading loadingText="Saving...">
        Click me
      </Button>
    </Wrap>
  )
}
