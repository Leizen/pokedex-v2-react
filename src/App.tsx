import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import light from "./themes/light";
import dark from "./themes/dark";
import { About } from "./components/About";
import { PokemonCards } from "./components/PokemonCards";
import { api, apiPokemonName } from "./services/api";

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

function App() {
  const [theme, setTheme] = useState(light);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function loadPokemons() {
      const response = await api.get("pokemon?limit=50&offset=");

      let list: Array<Pokemon> = [];

      response.data.results.map(async (pokemon: Pokemon) => {
        const pokemonInfo = await apiPokemonName.get<Pokemon>(
          `${pokemon.name}`
        );

        list.push(pokemonInfo.data);
      });
      setPokemonList(list);
    }

    loadPokemons();
  }, []);

  function handleSetTheme() {
    setTheme(theme.name === "light" ? dark : light);
    console.log(pokemonList);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header handleSetTheme={handleSetTheme} />
      <About />
      {pokemonList.length > 0 ? (
        <PokemonCards pokemonList={pokemonList} />
      ) : (
        <h1>Loading</h1>
      )}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
