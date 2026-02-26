'use client'
import { useState } from 'react'
import { Checkbox } from '@zalify-ui/react'

export const App = () => {
  const [checked, setChecked] = useState<Checkbox.CheckedState>(false)

  return (
    <Checkbox.Root checked={checked} onCheckedChange={(e) => setChecked(e.checked)}>
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Label</Checkbox.Label>
    </Checkbox.Root>
  )
}
