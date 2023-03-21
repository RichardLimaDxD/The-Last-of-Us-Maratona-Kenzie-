import KenzieLogo from "../../../src/assets/KenzieAcademyWHorizontal1.svg";
import { useContext } from "react";
import { StyledHeaderContainer } from "./style";
import { IoIosMenu } from "react-icons/io";
import { createProviders } from "../../providers";

export const HeaderContainer = () => {
  const { menu, setMenu } = useContext(createProviders);

  const showMenu = () => setMenu(!menu);

  return (
    <StyledHeaderContainer>
      <img src={KenzieLogo} alt="KenzieLogoHorizontal" />

      <nav className="container__desktopNav">
        <ul>
          <li>
            <a href="#home"> HOME</a>
          </li>
          <li>
            <a href="#EPISODES">EPISODE</a>
          </li>
          <li>
            <a href="#EPISODES">STORY</a>
          </li>
          <li>
            <a href="#EPISODES">GALLERY</a>
          </li>
        </ul>
      </nav>

      <nav className="container__mobileNav">
        <IoIosMenu onClick={() => showMenu()} className="menuIcon" size={50} />
        {menu && (
          <ul>
            <li>
              <a href="#home"> HOME</a>
            </li>
            <li>
              <a href="#EPISODES">EPISODE</a>
            </li>
            <li>
              <a href="#EPISODES">STORY</a>
            </li>
            <li>
              <a href="#EPISODES">GALLERY</a>
            </li>
          </ul>
        )}
      </nav>
    </StyledHeaderContainer>
  );
};
