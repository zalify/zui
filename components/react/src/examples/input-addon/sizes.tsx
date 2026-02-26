import { EuroIcon } from 'lucide-react'
import { Group, Input, InputAddon, Stack } from '@zalify-ui/react'

export const App = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'] as const
  return (
    <Stack gap="4">
      {sizes.map((size) => (
        <Group key={size} attached>
          <InputAddon size={size}>
            <EuroIcon />
          </InputAddon>
          <Input placeholder="0.00" size={size} />
          <InputAddon>EUR</InputAddon>
        </Group>
      ))}
    </Stack>
  )
}
