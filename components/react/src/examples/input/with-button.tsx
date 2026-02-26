import { Button, Group, Input } from '@zalify-ui/react'

export const App = () => {
  return (
    <Group attached width="full">
      <Input placeholder="Enter your email" />
      <Button variant="outline" colorPalette="gray">
        Submit
      </Button>
    </Group>
  )
}
