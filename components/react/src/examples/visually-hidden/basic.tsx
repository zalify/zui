import { Box, VisuallyHidden } from '@zalify-ui/react'

export const App = () => {
  return (
    <Box>
      <VisuallyHidden>This text is hidden visually but available to screen readers</VisuallyHidden>
      <span>Visible content (hidden label above)</span>
    </Box>
  )
}
