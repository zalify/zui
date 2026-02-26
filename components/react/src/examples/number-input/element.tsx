import { DollarSignIcon } from 'lucide-react'
import { InputGroup, NumberInput } from '@zalify-ui/react'

export const App = () => {
  return (
    <NumberInput.Root defaultValue="42">
      <NumberInput.Control />
      <InputGroup startElement={<DollarSignIcon />}>
        <NumberInput.Input />
      </InputGroup>
    </NumberInput.Root>
  )
}
