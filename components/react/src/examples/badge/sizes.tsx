import { StarIcon } from 'lucide-react'
import { Badge, Wrap } from '@zalify-ui/react'

export const App = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'] as const
  return (
    <Wrap gap="4">
      {sizes.map((size) => (
        <Badge key={size} size={size}>
          <StarIcon />
          Badge
        </Badge>
      ))}
    </Wrap>
  )
}
