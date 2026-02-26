import { NumberInput, Stack } from '@zalify-ui/react'

export const App = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'] as const
  return (
    <Stack gap="4">
      {sizes.map((size) => (
        <NumberInput.Root key={size} size={size} defaultValue="42">
          <NumberInput.Control />
          <NumberInput.Input />
        </NumberInput.Root>
      ))}
    </Stack>
  )
}
