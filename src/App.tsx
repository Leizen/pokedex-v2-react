import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import light from "./themes/light";
import dark from "./themes/dark";
import { About } from "./components/About";

function App() {
  const [theme, setTheme] = useState(light);

  function handleSetTheme() {
    setTheme(theme.name === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header handleSetTheme={handleSetTheme} />
      <About />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
