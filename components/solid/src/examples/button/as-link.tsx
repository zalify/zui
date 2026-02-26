import { Button } from '@/components/ui'

export const App = () => {
  return (
    <Button
      asChild={(props) => (
        <a href="https://ui.zalify.com" target="_blank" rel="noopener" {...props()}>
          Zalify UI
        </a>
      )}
    />
  )
}
