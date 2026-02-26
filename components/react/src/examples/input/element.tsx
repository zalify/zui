import { EuroIcon, InfoIcon, UserIcon } from 'lucide-react'
import { Input, InputGroup, Stack } from '@zalify-ui/react'

export const App = () => {
  return (
    <Stack gap="4">
      <InputGroup startElement={<UserIcon />}>
        <Input placeholder="Username" />
      </InputGroup>

      <InputGroup endElement={<EuroIcon />}>
        <Input placeholder="0.00" />
      </InputGroup>

      <InputGroup startElement={<EuroIcon />} endElement={<InfoIcon />}>
        <Input placeholder="0.00" />
      </InputGroup>
    </Stack>
  )
}
