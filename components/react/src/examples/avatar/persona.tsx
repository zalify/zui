import { Avatar, Text, Box, HStack } from '@zalify-ui/react'

export const App = () => {
  return (
    <HStack gap="4">
      <Avatar.Root size="lg">
        <Avatar.Image src="https://avatars.githubusercontent.com/u/10615036?v=4" />
        <Avatar.Fallback name="Ryan Zou" />
      </Avatar.Root>
      <Box>
        <Text fontWeight="medium">Ryan Zou</Text>
        <Text color="fg.muted" textStyle="sm">
          ryan@zalify.com
        </Text>
      </Box>
    </HStack>
  )
}
