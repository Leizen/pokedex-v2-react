import {
  Container,
  Content,
  Left,
  Rigth,
  Header,
  Types,
  Type,
  Stats,
  ProgressBar,
} from "./styles";

export function About() {
  return (
    <Container>
      <Content>
        <Left>
          <h1>oi</h1>
        </Left>
        <Rigth>
          <Header>
            <h1>Bulbassauro</h1>
            <h1>#001</h1>
          </Header>
          <Types>
            <Type>
              <p>Grass</p>
            </Type>
            <Type>
              <p>Poison</p>
            </Type>
          </Types>
          <Stats>
            <ProgressBar color={"hp"}>
              <p>HP</p>
              <progress max="290" value="108" />
              <p>108</p>
            </ProgressBar>
            <ProgressBar color={"atk"}>
              <p>Attack</p>
              <progress max="290" value="130" />
              <p>130</p>
            </ProgressBar>
            <ProgressBar color={"def"}>
              <p>Defense</p>
              <progress max="290" value="95" />
              <p>95</p>
            </ProgressBar>
            <ProgressBar color={"spatk"}>
              <p>Sp.Atk</p>
              <progress max="290" value="80" />
              <p>80</p>
            </ProgressBar>
            <ProgressBar color={"spdef"}>
              <p>Sp.Def</p>
              <progress max="290" value="85" />
              <p>85</p>
            </ProgressBar>
            <ProgressBar color={"speed"}>
              <p>Speed</p>
              <progress max="290" value="102" />
              <p>102</p>
            </ProgressBar>
          </Stats>
        </Rigth>
      </Content>
    </Container>
  );
}
