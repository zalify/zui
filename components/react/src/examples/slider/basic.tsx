import { Slider } from '@zalify-ui/react'

export const App = () => {
  return (
    <Slider.Root width="sm" defaultValue={[40]}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
