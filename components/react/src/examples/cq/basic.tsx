import { Box, CQ } from '@zalify-ui/react'

export const App = () => {
  return (
    <CQ name="sidebar" type="inline-size">
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2">
        Container query context
      </Box>
    </CQ>
  )
}
