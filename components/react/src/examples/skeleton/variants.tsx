import { Skeleton, Text, Stack } from '@zalify-ui/react'

export const App = () => {
  return (
    <Stack gap="4">
      <Stack gap="1.5">
        <Text textStyle="label">Pulse</Text>
        <Skeleton flex="1" minH="5" variant="pulse" />
      </Stack>
      <Stack gap="1.5">
        <Text textStyle="label">Shine</Text>
        <Skeleton flex="1" minH="5" variant="shine" />
      </Stack>
    </Stack>
  )
}
