import { SendIcon } from 'lucide-react'
import { IconButton } from '@zalify-ui/react'

export const App = () => {
  return (
    <IconButton borderRadius="full" aria-label="Send message">
      <SendIcon />
    </IconButton>
  )
}
