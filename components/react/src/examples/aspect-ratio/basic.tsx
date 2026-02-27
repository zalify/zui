import { AspectRatio, Box } from '@zalify-ui/react'

export const App = () => {
  return (
    <AspectRatio ratio={16 / 9} maxWidth="400px">
      <Box bg="gray.subtle.bg" borderRadius="l2" display="flex" alignItems="center" justifyContent="center">
        16:9 Aspect Ratio
      </Box>
    </AspectRatio>
  )
}
