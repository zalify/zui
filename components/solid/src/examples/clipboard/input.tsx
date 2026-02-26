import { Clipboard, IconButton, Input, InputGroup } from '@/components/ui'

export const App = () => {
  return (
    <Clipboard.Root value="https://ui.zalify.com">
      <Clipboard.Label textStyle="label">Document Link</Clipboard.Label>
      <InputGroup endElement={<ClipboardIconButton />}>
        <Clipboard.Input asChild={(inputProps) => <Input {...inputProps()} />} />
      </InputGroup>
    </Clipboard.Root>
  )
}

const ClipboardIconButton = () => {
  return (
    <Clipboard.Trigger
      asChild={(triggerProps) => (
        <IconButton variant="surface" size="xs" me="-2" {...triggerProps()}>
          <Clipboard.Indicator />
        </IconButton>
      )}
    />
  )
}
