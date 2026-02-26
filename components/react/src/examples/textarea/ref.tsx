'use client'
import { useRef } from 'react'
import { Textarea } from '@zalify-ui/react'

export const App = () => {
  const ref = useRef<HTMLTextAreaElement>(null)
  return <Textarea ref={ref} />
}
