import { Clipboard, IconButton } from '@/components/ui'

export const App = () => {
  return (
    <Clipboard.Root value="https://zui.sh">
      <Clipboard.Trigger asChild>
        <IconButton variant="surface" size="sm">
          <Clipboard.Indicator />
        </IconButton>
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}
