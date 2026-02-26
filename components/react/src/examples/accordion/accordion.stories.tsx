import { Container } from '@zalify-ui/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Disclosure / Accordion',
  decorators: [(story) => <Container maxW="xl">{story()}</Container>],
}

export default meta

export { App as basic } from './basic'
