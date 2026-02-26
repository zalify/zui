import { Avatar, Circle, Float } from '@zalify-ui/react'

export const App = () => {
  return (
    <Avatar.Root size="lg">
      <Avatar.Fallback name="Christian Busch" />
      <Float placement="bottom-end" offsetX="1" offsetY="1">
        <Circle bg="colorPalette.solid.bg" size="2" outline="0.2em solid" outlineColor="canvas" />
      </Float>
    </Avatar.Root>
  )
}
