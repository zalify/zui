import { Clipboard, IconButton } from '@zalify-ui/react'

export const App = () => {
  return (
    <Clipboard.Root value="https://ui.zalify.com" timeout={1000}>
      <Clipboard.Trigger asChild>
        <IconButton variant="surface" size="sm">
          <Clipboard.Indicator />
        </IconButton>
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}
