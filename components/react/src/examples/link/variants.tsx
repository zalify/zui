import { Stack } from 'styled-system/jsx'
import { Link } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="4" align="start">
      <Link href="https://zui.sh" variant="underline">
        Visit ZUI
      </Link>
      <Link href="https://zui.sh" variant="plain">
        Visit ZUI
      </Link>
    </Stack>
  )
}
