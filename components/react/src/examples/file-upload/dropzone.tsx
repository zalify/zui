import { UploadIcon } from 'lucide-react'
import { FileUpload, Icon, Box } from '@zalify-ui/react'

export const App = () => {
  return (
    <FileUpload.Root>
      <FileUpload.HiddenInput />
      <FileUpload.Dropzone>
        <Icon color="fg.muted" size="lg" mb="4">
          <UploadIcon />
        </Icon>
        <Box>Drag and drop files here</Box>
        <Box color="fg.muted">.png, .jpg up to 5MB</Box>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload.Root>
  )
}
