import { Box, Circle, Float } from '@zalify-ui/react'

export const App = () => {
  return (
    <Box position="relative" width="20" height="20" bg="gray.subtle.bg" borderRadius="l2">
      <Float placement="top-end">
        <Circle size="6" bg="red.solid.bg" color="red.solid.fg">3</Circle>
      </Float>
    </Box>
  )
}
