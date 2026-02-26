import { RadioGroup, Wrap } from '@zalify-ui/react'

export const App = () => {
  const sizes = ['sm', 'md', 'lg'] as const
  return (
    <Wrap gap="4">
      {sizes.map((size) => (
        <RadioGroup.Root size={size} key={size} defaultValue={size}>
          <RadioGroup.Item value={size}>
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>Radio ({size})</RadioGroup.ItemText>
          </RadioGroup.Item>
        </RadioGroup.Root>
      ))}
    </Wrap>
  )
}
