import { PhoneIcon, SendIcon } from 'lucide-react'
import { Button, Wrap } from '@zalify-ui/react'

export const App = () => {
  return (
    <Wrap gap="4">
      <Button>
        <SendIcon />
        Send
      </Button>
      <Button variant="outline">
        Call us <PhoneIcon />
      </Button>
    </Wrap>
  )
}
