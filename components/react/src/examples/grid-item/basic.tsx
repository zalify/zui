import { Box, Grid, GridItem } from '@zalify-ui/react'

export const App = () => {
  return (
    <Grid columns={4} gap="4">
      <GridItem colSpan={2}>
        <Box bg="gray.subtle.bg" p="4" borderRadius="l2">Span 2 columns</Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box bg="gray.subtle.bg" p="4" borderRadius="l2">Span 1</Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box bg="gray.subtle.bg" p="4" borderRadius="l2">Span 1</Box>
      </GridItem>
    </Grid>
  )
}
