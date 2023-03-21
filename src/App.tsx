import { ContainerEpisodes } from "./components/ContainerEpisodes";
import { ContainerFooter } from "./components/ContainerFooter";
import { HeaderContainer } from "./components/HeaderContainer";
import { StyledBackgroundWallpaper } from "./components/HeaderContainer/style";
import { MainContainer } from "./components/MainContainer";
import { GuideStyled } from "./styles/GuideStyled";

function App() {
  return (
    <div className="App">
      <GuideStyled />
      <StyledBackgroundWallpaper className="container__wallpaper">
        <HeaderContainer />
        <MainContainer />
      </StyledBackgroundWallpaper>

      <ContainerEpisodes />
      <ContainerFooter />
    </div>
  );
}

export default App;
