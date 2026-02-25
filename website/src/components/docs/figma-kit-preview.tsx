import Image from 'next/image'
import { AspectRatio, Flex } from 'styled-system/jsx'
import coverImage from '~/images/figma-kit-preview.jpg'

interface Props {
  variant: 'foundation' | 'pro'
}

export const FigmaKitPreview = (props: Props) =>
  props.variant === 'foundation' ? (
    <Flex
      bg="gray.subtle.bg"
      borderRadius="l3"
      borderWidth="1px"
      overflow="hidden"
      className="not-prose"
    >
      <iframe
        title="Fimga Kit Preview"
        width="100%"
        height="432px"
        // file source url
        src=""
      />
    </Flex>
  ) : (
    <a
      href=""
      target="_blank"
      rel="noreferrer"
      aria-label="Preview ZUI Figma Kit Pro"
      className="not-prose"
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          fill
          src={coverImage}
          alt="ZUI Figma Kit Pro Cover Image"
          style={{
            objectFit: 'cover',
          }}
        />
      </AspectRatio>
    </a>
  )
