import {
  Badge,
  Code,
  Heading,
  HStack,
  Kbd,
  Link,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  Stack,
  Text,
  Wrap,
  Container,
} from "@zalify-ui/react";
import { InteractiveDemo } from "./interactive-demo";

export default function Home() {
  return (
    <Container>
      <Stack gap="10" p="8" maxW="5xl" mx="auto">
        <Stack gap="2">
          <Heading as="h1" textStyle="4xl">
            Zalify UI Demo
          </Heading>
          <Text color="fg.muted" textStyle="lg">
            Showcasing <Code>@zalify-ui/react</Code> components in a Next.js 16
            app.
          </Text>
        </Stack>

        <Stack gap="6">
          <Heading as="h2" textStyle="2xl">
            Server Components
          </Heading>
          <Text color="fg.muted">
            These components render on the server — no{" "}
            <Code>&quot;use client&quot;</Code> needed.
          </Text>

          <Stack gap="4">
            <Heading as="h3" textStyle="lg">
              Typography
            </Heading>
            <Stack gap="2">
              <Heading as="h1" textStyle="4xl">
                Heading 4xl
              </Heading>
              <Heading as="h2" textStyle="3xl">
                Heading 3xl
              </Heading>
              <Heading as="h3" textStyle="2xl">
                Heading 2xl
              </Heading>
              <Heading as="h4" textStyle="xl">
                Heading xl
              </Heading>
              <Text textStyle="lg">Text lg — body copy for content</Text>
              <Text textStyle="md">Text md — default body text</Text>
              <Text textStyle="sm" color="fg.muted">
                Text sm — secondary information
              </Text>
            </Stack>
          </Stack>

          <Stack gap="4">
            <Heading as="h3" textStyle="lg">
              Badge
            </Heading>
            <Wrap gap="2">
              <Badge variant="solid">Solid</Badge>
              <Badge variant="surface">Surface</Badge>
              <Badge variant="subtle">Subtle</Badge>
              <Badge variant="outline">Outline</Badge>
            </Wrap>
          </Stack>

          <Stack gap="4">
            <Heading as="h3" textStyle="lg">
              Inline Elements
            </Heading>
            <Text>
              Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.
            </Text>
            <Text>
              Run <Code>npm install @zalify-ui/react</Code> to get started.
            </Text>
            <Text>
              Visit the{" "}
              <Link href="https://ui.zalify.com" target="_blank">
                documentation
              </Link>{" "}
              for more details.
            </Text>
          </Stack>

          <Stack gap="4">
            <Heading as="h3" textStyle="lg">
              Skeleton &amp; Spinner
            </Heading>
            <HStack gap="4">
              <SkeletonCircle boxSize="12" />
              <Stack gap="2" flex="1">
                <Skeleton height="4" width="60%" />
                <SkeletonText noOfLines={2} />
              </Stack>
            </HStack>
            <HStack gap="3">
              <Spinner size="xs" />
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
            </HStack>
          </Stack>
        </Stack>

        <InteractiveDemo />
      </Stack></Container>
  );
}
