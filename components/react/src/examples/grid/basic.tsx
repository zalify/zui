import { Box, Grid } from '@zalify-ui/react'

export const App = () => {
  return (
    <Grid columns={3} gap="4">
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2">Item 1</Box>
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2">Item 2</Box>
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2">Item 3</Box>
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2">Item 4</Box>
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2">Item 5</Box>
      <Box bg="gray.subtle.bg" p="4" borderRadius="l2">Item 6</Box>
    </Grid>
  )
}
