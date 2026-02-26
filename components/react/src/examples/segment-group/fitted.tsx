import { SegmentGroup } from '@zalify-ui/react'

export const App = () => {
  const items = ['React', 'Solid', 'Svelte', 'Vue']

  return (
    <SegmentGroup.Root defaultValue="React" fitted>
      <SegmentGroup.Indicator />
      <SegmentGroup.Items items={items} />
    </SegmentGroup.Root>
  )
}
