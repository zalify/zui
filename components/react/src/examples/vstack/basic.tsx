import { Box, VStack } from '@zalify-ui/react'

export const App = () => {
  return (
    <VStack gap="4">
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2" width="full">Item 1</Box>
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2" width="full">Item 2</Box>
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2" width="full">Item 3</Box>
    </VStack>
  )
}
