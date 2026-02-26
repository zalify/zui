import { Avatar, Wrap } from '@zalify-ui/react'

export const App = () => {
  const shapes = ['square', 'rounded', 'full'] as const

  return (
    <Wrap gap="4">
      {shapes.map((shape) => (
        <Avatar.Root size="lg" shape={shape} key={shape}>
          <Avatar.Fallback name="Christian Busch" />
          <Avatar.Image src="https://avatars.githubusercontent.com/u/10615036?v=4" />
        </Avatar.Root>
      ))}
    </Wrap>
  )
}
