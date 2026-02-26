import { Progress } from '@zalify-ui/react'

export const App = () => {
  return (
    <Progress.Root defaultValue={42}>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}
