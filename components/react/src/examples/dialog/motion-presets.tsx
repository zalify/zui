import { Portal } from '@ark-ui/react/portal'
import { Button, CloseButton, Dialog, Wrap } from '@zalify-ui/react'

export const App = () => {
  const presets = ['scale', 'slide-in-bottom', 'slide-in-top', 'none'] as const

  return (
    <Wrap gap="4">
      {presets.map((preset) => (
        <Dialog.Root key={preset} motionPreset={preset}>
          <Dialog.Trigger asChild>
            <Button variant="outline">{preset}</Button>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Title</Dialog.Title>
                  <Dialog.Description>Description</Dialog.Description>
                </Dialog.Header>
                <Dialog.Body>{/* Content */}</Dialog.Body>
                <Dialog.Footer>
                  <Dialog.ActionTrigger>
                    <Button variant="outline">Cancel</Button>
                  </Dialog.ActionTrigger>
                  <Dialog.ActionTrigger>
                    <Button>Save</Button>
                  </Dialog.ActionTrigger>
                </Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <CloseButton />
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      ))}
    </Wrap>
  )
}
