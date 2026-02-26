import { Portal } from '@ark-ui/react/portal'
import { Button, CloseButton, Dialog, Wrap } from '@zalify-ui/react'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

  return (
    <Wrap gap="4">
      {sizes.map((size) => (
        <Dialog.Root key={size} size={size}>
          <Dialog.Trigger asChild>
            <Button variant="outline">Open ({size})</Button>
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
