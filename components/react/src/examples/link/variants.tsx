import { Stack } from 'styled-system/jsx'
import { Link } from '@/components/ui'

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
