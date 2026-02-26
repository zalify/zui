import { Avatar, Wrap } from '@zalify-ui/react'

export const App = () => {
  const variants = ['solid', 'surface', 'subtle', 'outline'] as const

  return (
    <Wrap gap="4">
      {variants.map((variant) => (
        <Avatar.Root variant={variant} size="lg" key={variant}>
          <Avatar.Fallback name="Christian Busch" />
        </Avatar.Root>
      ))}
    </Wrap>
  )
}
