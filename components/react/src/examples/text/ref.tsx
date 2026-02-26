'use client'
import { useRef } from 'react'
import { Text } from '@zalify-ui/react'

export const App = () => {
  const ref = useRef<HTMLParagraphElement>(null)
  return <Text ref={ref}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
}
