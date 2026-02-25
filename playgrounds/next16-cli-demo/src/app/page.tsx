import { Container } from "styled-system/jsx";
import { Button } from "@/components/ui";

export default function Home() {
  return (
    <Container>
      <Button>Click me</Button>
      <Button size="sm">Click me</Button>
      <Button size="md">Click me</Button>
      <Button size="lg">Click me</Button>
      <Button size="xl">Click me</Button>
      <Button size="2xl">Click me</Button>
    </Container>
  );
}
