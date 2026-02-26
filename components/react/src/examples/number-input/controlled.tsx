'use client'
import { useState } from 'react'
import { NumberInput } from '@zalify-ui/react'

export const App = () => {
  const [value, setValue] = useState('10')
  return (
    <NumberInput.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
