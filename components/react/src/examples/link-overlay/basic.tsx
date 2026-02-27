import { Box, LinkOverlay } from '@zalify-ui/react'

export const App = () => {
  return (
    <Box position="relative" p="4" bg="gray.subtle.bg" borderRadius="l2">
      <h3>Article Title</h3>
      <p>Some description text here.</p>
      <LinkOverlay href="https://example.com">Read more</LinkOverlay>
    </Box>
  )
}
