import { ChevronDownIcon } from 'lucide-react'
import { Button, ButtonGroup, IconButton } from '@zalify-ui/react'

export const App = () => {
  return (
    <ButtonGroup variant="outline" attached>
      <Button>Button</Button>
      <IconButton>
        <ChevronDownIcon />
      </IconButton>
    </ButtonGroup>
  )
}
