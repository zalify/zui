import { Box, Flex } from '@zalify-ui/react'

export const App = () => {
  return (
    <Flex gap="4" align="center">
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2">Item 1</Box>
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2">Item 2</Box>
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2">Item 3</Box>
    </Flex>
  )
}
