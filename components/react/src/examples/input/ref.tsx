'use client'
import { useRef } from 'react'
import { Input } from '@zalify-ui/react'

export const App = () => {
  const ref = useRef<HTMLInputElement>(null)
  return <Input ref={ref} />
}
