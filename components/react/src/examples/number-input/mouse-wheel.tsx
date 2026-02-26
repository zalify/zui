import { NumberInput } from '@zalify-ui/react'

export const App = () => {
  return (
    <NumberInput.Root defaultValue="42" allowMouseWheel>
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
