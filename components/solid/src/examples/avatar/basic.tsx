import { Avatar } from '@/components/ui'

export const App = () => {
  return (
    <Avatar.Root size="lg">
      <Avatar.Image src="https://avatars.githubusercontent.com/u/10615036?v=4" />
      <Avatar.Fallback name="Christian Busch" />
    </Avatar.Root>
  )
}
