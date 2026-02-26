import { DiamondIcon } from 'lucide-react'
import { Icon, Wrap } from '@zalify-ui/react'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
  return (
    <Wrap gap="4">
      {sizes.map((size) => (
        <Icon key={size} size={size} color="colorPalette.solid.bg">
          <DiamondIcon />
        </Icon>
      ))}
    </Wrap>
  )
}
