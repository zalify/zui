import { MapPinIcon } from 'lucide-solid'
import { createSignal } from 'solid-js'
import { Portal } from 'solid-js/web'
import { HStack, Stack } from 'styled-system/jsx'
import { Avatar, HoverCard, Icon, Link, Text } from '@/components/ui'

export const App = () => {
  const [open, setOpen] = createSignal(false)

  return (
    <HoverCard.Root open={open()} onOpenChange={(e) => setOpen(e.open)}>
      <HoverCard.Trigger
        asChild={(triggerProps) => (
          <Link href="https://x.com/ZuiDevs/" target="_blank" {...triggerProps()}>
            @ZuiDevs
          </Link>
        )}
      />
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content>
            <HoverCard.Arrow>
              <HoverCard.ArrowTip />
            </HoverCard.Arrow>
            <Stack gap="4" direction="row">
              <Avatar.Root size="lg">
                <Avatar.Image src="https://avatars.githubusercontent.com/u/10615036?v=4" />
                <Avatar.Fallback name="Christian Busch" />
              </Avatar.Root>
              <Stack gap="3">
                <Stack gap="1">
                  <Text fontWeight="semibold">@ZuiDevs</Text>
                  <Text color="fg.muted">Principal Software Engineer working at Pyck.ai</Text>
                </Stack>
                <HStack gap="1" color="fg.subtle">
                  <Icon size="sm">
                    <MapPinIcon />
                  </Icon>
                  <Text textStyle="xs">Joined Oktober 2025</Text>
                </HStack>
              </Stack>
            </Stack>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  )
}
