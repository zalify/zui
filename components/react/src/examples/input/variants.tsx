import { Input, Stack } from '@zalify-ui/react'

export const App = () => {
  const variants = ['outline', 'subtle', 'surface', 'flushed'] as const
  return (
    <Stack gap="4">
      {variants.map((variant) => (
        <Input key={variant} placeholder={variant} variant={variant} />
      ))}
    </Stack>
  )
}
