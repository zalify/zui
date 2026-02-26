import { Switch, Wrap } from '@zalify-ui/react'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg'] as const

  return (
    <Wrap gap="4">
      {sizes.map((size) => (
        <Switch.Root key={size} size={size}>
          <Switch.HiddenInput />
          <Switch.Control />
          <Switch.Label />
        </Switch.Root>
      ))}
    </Wrap>
  )
}
