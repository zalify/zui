import { Button, Clipboard } from '@/components/ui'

export const App = () => {
  return (
    <Clipboard.Root value="https://zui.sh">
      <Clipboard.Trigger
        asChild={(triggerProps) => (
          <Button variant="surface" size="sm" {...triggerProps()}>
            <Clipboard.Indicator />
            <Clipboard.CopyText />
          </Button>
        )}
      />
    </Clipboard.Root>
  )
}
