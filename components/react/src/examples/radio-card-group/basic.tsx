import { RadioCardGroup, HStack } from '@zalify-ui/react'

export const App = () => {
  return (
    <RadioCardGroup.Root defaultValue="react">
      <RadioCardGroup.Label>Select framework</RadioCardGroup.Label>
      <HStack alignItems="stretch">
        {items.map((item) => (
          <RadioCardGroup.Item key={item.value} value={item.value}>
            <RadioCardGroup.ItemHiddenInput />
            <RadioCardGroup.ItemText>{item.title}</RadioCardGroup.ItemText>
            <RadioCardGroup.ItemControl />
          </RadioCardGroup.Item>
        ))}
      </HStack>
    </RadioCardGroup.Root>
  )
}

const items = [
  { value: 'react', title: 'React' },
  { value: 'solid', title: 'Solid' },
  { value: 'vue', title: 'Vue' },
]
