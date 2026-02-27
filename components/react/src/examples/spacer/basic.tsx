import { Box, Flex, Spacer } from '@zalify-ui/react'

export const App = () => {
  return (
    <Flex>
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2">Left</Box>
      <Spacer />
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2">Right</Box>
    </Flex>
  )
}
