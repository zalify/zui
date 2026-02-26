import { EuroIcon } from 'lucide-react'
import { Group, Input, InputAddon, Stack } from '@zalify-ui/react'

export const App = () => {
  const variants = ['outline', 'subtle', 'surface'] as const
  return (
    <Stack gap="4">
      {variants.map((variant) => (
        <Group key={variant} attached>
          <InputAddon variant={variant}>
            <EuroIcon />
          </InputAddon>
          <Input placeholder="0.00" variant={variant} />
          <InputAddon variant={variant}>EUR</InputAddon>
        </Group>
      ))}
    </Stack>
  )
}
