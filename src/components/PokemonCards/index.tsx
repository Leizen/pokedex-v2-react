import { Container, Content, Search, Header, Cards } from "./styles";
import searchIcon from "../../assets/search-icon.png";
import { Card } from "../Card";

interface PokemonSprites {
  front_default: string;
  front_shiny: string;
}

interface PokemonType {
  type: {
    name: string;
  };
}

interface Pokemon {
  id: number;
  name: string;
  types: Array<PokemonType>;
  sprites: PokemonSprites;
}

interface PokemonListProps {
  pokemonList: Array<Pokemon>;
}

export function PokemonCards({ pokemonList }: PokemonListProps) {
  return (
    <Container>
      <Content>
        <Header>
          <Search>
            <img src={searchIcon} alt="" />
            <input type="text" placeholder="Search by name or id" />
          </Search>
          <select defaultValue={"DEFAULT"}>
            <option value="default">Type</option>
            <option value="africa">Grass</option>
            <option value="america">Water</option>
            <option value="asia">Fighter</option>
            <option value="europe">Poison</option>
            <option value="oceania">Fire</option>
          </select>
        </Header>
        <Cards>
          {pokemonList.map((pokemon) => (
            <Card pokemon={pokemon} />
          ))}
        </Cards>
      </Content>
    </Container>
  );
}
