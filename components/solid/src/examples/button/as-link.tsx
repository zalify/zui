import { Button } from '@/components/ui'

export const App = () => {
  return (
    <Button
      asChild={(props) => (
        <a href="https://zui.sh" target="_blank" rel="noopener" {...props()}>
          ZUI
        </a>
      )}
    />
  )
}
