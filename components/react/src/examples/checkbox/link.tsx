import { Checkbox, Link } from '@zalify-ui/react'

export const App = () => {
  return (
    <Checkbox.Root>
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>
        I agree to the{' '}
        <Link href="https://ui.zalify.com" target="_blank">
          terms and conditions
        </Link>
      </Checkbox.Label>
    </Checkbox.Root>
  )
}
