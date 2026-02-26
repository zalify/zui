import { Link, Stack } from '@zalify-ui/react'

export const App = () => {
  return (
    <Stack gap="4" align="start">
      <Link href="https://ui.zalify.com" variant="underline">
        Visit Zalify UI
      </Link>
      <Link href="https://ui.zalify.com" variant="plain">
        Visit Zalify UI
      </Link>
    </Stack>
  )
}
