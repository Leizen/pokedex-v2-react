import { Container } from "./styles";

interface TypeProps {
  type: string;
}

export function Type({ type }: TypeProps) {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Container>
      <h3>{capitalizeFirstLetter(type)}</h3>
    </Container>
  );
}
