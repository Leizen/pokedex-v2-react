import { Container, Header, PokemonImage, Name, Info } from "./styles";
import bulbaPng from "../../assets/bulba.png";
import { Type } from "../Type";

interface PokemonSprites {
  front_default: string;
  front_shiny: string;
}

interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonProps {
  pokemon: {
    id: number;
    name: string;
    types: Array<PokemonType>;
    sprites: PokemonSprites;
  };
}

export function Card({ pokemon }: PokemonProps) {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, "0");

  console.log(pokemon);

  return (
    <Container>
      <Header>
        <h2>{"#" + zeroPad(pokemon.id, 3)}</h2>
      </Header>
      <PokemonImage>
        <img src={pokemon.sprites.front_default} alt="" />
      </PokemonImage>
      <Name>
        <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
      </Name>
      <Info>
        {pokemon.types.map((type) => (
          <Type type={type.type.name} />
        ))}
      </Info>
    </Container>
  );
}
