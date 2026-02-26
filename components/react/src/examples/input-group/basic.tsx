import { EuroIcon } from 'lucide-react'
import { Input, InputGroup } from '@zalify-ui/react'

export const App = () => {
  return (
    <InputGroup startElement={<EuroIcon />}>
      <Input placeholder="0.00" />
    </InputGroup>
  )
}
