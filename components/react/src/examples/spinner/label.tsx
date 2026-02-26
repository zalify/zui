import { Spinner, Text, VStack } from '@zalify-ui/react'

export const App = () => {
  return (
    <VStack gap="1.5">
      <Spinner />
      <Text color="fg.muted">Loading Users ...</Text>
    </VStack>
  )
}
