import { SearchIcon } from 'lucide-react'
import { IconButton, Input, InputGroup } from '@zalify-ui/react'

export const App = () => {
  return (
    <InputGroup
      endElement={
        <IconButton variant="surface" size="xs" colorPalette="gray">
          <SearchIcon />
        </IconButton>
      }
    >
      <Input placeholder="Search" />
    </InputGroup>
  )
}
