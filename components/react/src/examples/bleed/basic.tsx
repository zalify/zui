import { Bleed, Box } from '@zalify-ui/react'

export const App = () => {
  return (
    <Box p="8" bg="gray.subtle.bg" borderRadius="l2">
      <Box mb="4">Content with padding</Box>
      <Bleed inline="8">
        <Box bg="bg.subtle" p="4">
          This content bleeds into the padding
        </Box>
      </Bleed>
    </Box>
  )
}
