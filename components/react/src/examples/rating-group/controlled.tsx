'use client'
import { useState } from 'react'
import { RatingGroup } from '@zalify-ui/react'

export const App = () => {
  const [value, setValue] = useState(3)
  return (
    <RatingGroup.Root count={5} value={value} onValueChange={(e) => setValue(e.value)}>
      <RatingGroup.HiddenInput />
      <RatingGroup.Control />
    </RatingGroup.Root>
  )
}
