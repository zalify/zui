import { DisplayValue, Stack } from '@zalify-ui/react'

export const App = () => {
  return (
    <Stack gap="0">
      <DisplayValue value={null} />
      <DisplayValue value={undefined} />
      <DisplayValue value="" />
      <DisplayValue value={[]} />
    </Stack>
  )
}
