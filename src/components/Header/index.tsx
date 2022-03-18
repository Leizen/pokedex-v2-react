import pokeLogo from "../../assets/pokemon-logo.png";
import heartImg from "../../assets/heart.png";
import { Container, Logo, MadeBy, Content } from "./styles";

interface HeaderProps {
  handleSetTheme: () => void;
}

export function Header({ handleSetTheme }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={pokeLogo} alt="" />
        </Logo>
        <MadeBy onClick={handleSetTheme}>
          <span>Made with</span>
          <img src={heartImg} alt="" />
          <span>by Christian</span>
        </MadeBy>
      </Content>
    </Container>
  );
}
