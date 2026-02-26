import { RatingGroup } from '@zalify-ui/react'

export const App = () => {
  return (
    <RatingGroup.Root allowHalf count={5} defaultValue={3.5}>
      <RatingGroup.HiddenInput />
      <RatingGroup.Control />
    </RatingGroup.Root>
  )
}
