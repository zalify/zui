"use client";

import { useState } from "react";
import {
  Accordion,
  Alert,
  Avatar,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  CloseButton,
  Clipboard,
  Collapsible,
  Dialog,
  Divider,
  Field,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputAddon,
  IconButton,
  Menu,
  Progress,
  RadioGroup,
  Select,
  Slider,
  Stack,
  Switch,
  Tabs,
  Text,
  Textarea,
  Tooltip,
  Wrap,
  Container
} from "@zalify-ui/react";

export function InteractiveDemo() {
  const [sliderValue, setSliderValue] = useState([50]);

  return (

    <Stack gap="10">
      <Divider />

      <Stack gap="6">
        <Heading as="h2" textStyle="2xl">
          Client Components
        </Heading>
        <Text color="fg.muted">
          Interactive components that require &quot;use client&quot;.
        </Text>

        {/* Buttons */}
        <Stack gap="4">
          <Heading as="h3" textStyle="lg">
            Button
          </Heading>
          <Wrap gap="2">
            <Button variant="solid">Solid</Button>
            <Button variant="surface">Surface</Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="plain">Plain</Button>
          </Wrap>
          <Wrap gap="2">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </Wrap>
          <HStack gap="2">
            <ButtonGroup attached>
              <Button variant="outline">Left</Button>
              <Button variant="outline">Center</Button>
              <Button variant="outline">Right</Button>
            </ButtonGroup>
          </HStack>
        </Stack>

        {/* Alert */}
        <Stack gap="4">
          <Heading as="h3" textStyle="lg">
            Alert
          </Heading>
          <Stack gap="3">
            <Alert.Root>
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>Info</Alert.Title>
                <Alert.Description>
                  This is an informational alert.
                </Alert.Description>
              </Alert.Content>
              <CloseButton size="sm" pos="relative" top="-1" insetEnd="-1" />
            </Alert.Root>
            <Alert.Root colorPalette="green">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>Success</Alert.Title>
                <Alert.Description>Operation completed.</Alert.Description>
              </Alert.Content>
            </Alert.Root>
            <Alert.Root colorPalette="red">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>Error</Alert.Title>
                <Alert.Description>Something went wrong.</Alert.Description>
              </Alert.Content>
            </Alert.Root>
          </Stack>
        </Stack>

        {/* Avatar */}
        <Stack gap="4">
          <Heading as="h3" textStyle="lg">
            Avatar
          </Heading>
          <HStack gap="3">
            <Avatar.Root size="xs">
              <Avatar.Fallback>AB</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root size="sm">
              <Avatar.Fallback>CD</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root size="md">
              <Avatar.Fallback>EF</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root size="lg">
              <Avatar.Fallback>GH</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root size="xl">
              <Avatar.Fallback>IJ</Avatar.Fallback>
            </Avatar.Root>
          </HStack>
        </Stack>

        {/* Tabs */}
        <Stack gap="4">
          <Heading as="h3" textStyle="lg">
            Tabs
          </Heading>
          <Tabs.Root defaultValue="tab1" variant="enclosed">
            <Tabs.List>
              <Tabs.Trigger value="tab1">Overview</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Settings</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Billing</Tabs.Trigger>
              <Tabs.Indicator />
            </Tabs.List>
            <Tabs.Content value="tab1">
              <Text p="4">Overview tab content goes here.</Text>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <Text p="4">Settings tab content goes here.</Text>
            </Tabs.Content>
            <Tabs.Content value="tab3">
              <Text p="4">Billing tab content goes here.</Text>
            </Tabs.Content>
          </Tabs.Root>
        </Stack>

        {/* Accordion */}
        <Stack gap="4">
          <Heading as="h3" textStyle="lg">
            Accordion
          </Heading>
          <Accordion.Root collapsible>
            {["Getting Started", "Components", "Theming"].map((item) => (
              <Accordion.Item key={item} value={item}>
                <Accordion.ItemTrigger>
                  <Text flex="1" textAlign="start">
                    {item}
                  </Text>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Text p="4" color="fg.muted">
                    Content for the &quot;{item}&quot; section. Click the header
                    to toggle.
                  </Text>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Stack>

        {/* Form Controls */}
        <Stack gap="4">
          <Heading as="h3" textStyle="lg">
            Form Controls
          </Heading>
          <Stack gap="4" maxW="md">
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input placeholder="you@example.com" />
              <Field.HelperText>We&apos;ll never share your email.</Field.HelperText>
            </Field.Root>
            <Field.Root>
              <Field.Label>Website</Field.Label>
              <InputGroup>
                <InputAddon>https://</InputAddon>
                <Input placeholder="example.com" />
              </InputGroup>
            </Field.Root>
            <Field.Root>
              <Field.Label>Bio</Field.Label>
              <Textarea placeholder="Tell us about yourself..." />
            </Field.Root>
            <HStack gap="6">
              <Checkbox.Root defaultChecked>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>Remember me</Checkbox.Label>
              </Checkbox.Root>
              <Switch.Root>
                <Switch.Control />
                <Switch.Label>Dark mode</Switch.Label>
              </Switch.Root>
            </HStack>
            <Field.Root>
              <Field.Label>Framework</Field.Label>
              <RadioGroup.Root defaultValue="react">
                <HStack gap="4">
                  <RadioGroup.Item value="react">
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemControl />
                    <RadioGroup.ItemText>React</RadioGroup.ItemText>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="vue">
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemControl />
                    <RadioGroup.ItemText>Vue</RadioGroup.ItemText>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="svelte">
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemControl />
                    <RadioGroup.ItemText>Svelte</RadioGroup.ItemText>
                  </RadioGroup.Item>
                </HStack>
              </RadioGroup.Root>
            </Field.Root>
          </Stack>
        </Stack>

        {/* Select */}
        <Stack gap="4">
          <Heading as="h3" textStyle="lg">
            Select
          </Heading>
          <Select.Root
            collection={frameworks}
            maxW="xs"
          >
            <Select.Label>Framework</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Choose a framework" />
              </Select.Trigger>
              <Select.ClearTrigger asChild>
                <CloseButton size="xs" variant="plain" />
              </Select.ClearTrigger>
            </Select.Control>
            <Select.Positioner>
              <Select.Content>
                {frameworks.items.map((item) => (
                  <Select.Item key={item.value} item={item}>
                    <Select.ItemText>{item.label}</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Select.Root>
        </Stack>

        {/* Slider & Progress */}
        <Stack gap="4">
          <Heading as="h3" textStyle="lg">
            Slider &amp; Progress
          </Heading>
          <Stack gap="4" maxW="sm">
            <Slider.Root
              value={sliderValue}
              onValueChange={(e) => setSliderValue(e.value)}
            >
              <HStack justify="space-between">
                <Slider.Label>Volume</Slider.Label>
                <Slider.ValueText />
              </HStack>
              <Slider.Control>
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Thumb index={0} />
              </Slider.Control>
            </Slider.Root>
            <Progress.Root value={sliderValue[0]}>
              <HStack justify="space-between">
                <Progress.Label>Progress</Progress.Label>
                <Progress.ValueText />
              </HStack>
              <Progress.Track>
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>
          </Stack>
        </Stack>

        {/* Card */}
        <Stack gap="4">
          <Heading as="h3" textStyle="lg">
            Card
          </Heading>
          <Wrap gap="4">
            <Card.Root maxW="sm">
              <Card.Header>
                <Card.Title>Default Card</Card.Title>
                <Card.Description>
                  A simple card with header, body, and footer.
                </Card.Description>
              </Card.Header>
              <Card.Body>
                <Text color="fg.muted">Card body content goes here.</Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline" colorPalette="gray">Cancel</Button>
                <Button>Save</Button>
              </Card.Footer>
            </Card.Root>
            <Card.Root maxW="sm" variant="elevated">
              <Card.Header>
                <Card.Title>Elevated Card</Card.Title>
                <Card.Description>
                  This card has a subtle shadow elevation.
                </Card.Description>
              </Card.Header>
              <Card.Body>
                <Text color="fg.muted">Great for highlighting content.</Text>
              </Card.Body>
            </Card.Root>
          </Wrap>
        </Stack>

        {/* Menu */}
        <Stack gap="4">
          <Heading as="h3" textStyle="lg">
            Menu &amp; Tooltip
          </Heading>
          <HStack gap="4">
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button variant="outline">Open Menu</Button>
              </Menu.Trigger>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="new">New File</Menu.Item>
                  <Menu.Item value="open">Open</Menu.Item>
                  <Menu.Item value="save">Save</Menu.Item>
                  <Menu.Separator />
                  <Menu.Item value="delete" color="fg.error">
                    Delete
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
            <Tooltip content="Click to copy the invite link">
              <Button variant="subtle">Hover me</Button>
            </Tooltip>
          </HStack>
        </Stack>

        {/* Dialog */}
        <Stack gap="4">
          <Heading as="h3" textStyle="lg">
            Dialog
          </Heading>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </Dialog.Trigger>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Confirm Action</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body>
                  <Text>
                    Are you sure you want to continue? This action cannot be
                    undone.
                  </Text>
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    <Button variant="outline" colorPalette="gray">Cancel</Button>
                  </Dialog.CloseTrigger>
                  <Dialog.ActionTrigger>Confirm</Dialog.ActionTrigger>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Positioner>
          </Dialog.Root>
        </Stack>

        {/* Clipboard & Collapsible */}
        <Stack gap="4">
          <Heading as="h3" textStyle="lg">
            Clipboard &amp; Collapsible
          </Heading>
          <Clipboard.Root value="npm install @zalify-ui/react">
            <Clipboard.Label>Install command</Clipboard.Label>
            <Clipboard.Control>
              <Clipboard.Input />
              <Clipboard.Trigger asChild>
                <IconButton variant="outline" size="sm">
                  <Clipboard.Indicator />
                </IconButton>
              </Clipboard.Trigger>
            </Clipboard.Control>
          </Clipboard.Root>
          <Collapsible.Root>
            <Collapsible.Trigger asChild>
              <Button variant="outline" size="sm">
                Toggle Details
              </Button>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Card.Root mt="2">
                <Card.Body>
                  <Text color="fg.muted">
                    This content is hidden by default and revealed when you
                    click the button above. Useful for progressive disclosure.
                  </Text>
                </Card.Body>
              </Card.Root>
            </Collapsible.Content>
          </Collapsible.Root>
        </Stack>
      </Stack>
    </Stack>
  );
}

import { createListCollection } from "@ark-ui/react/collection";

const frameworks = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
    { label: "Angular", value: "angular" },
    { label: "Solid", value: "solid" },
  ],
});
