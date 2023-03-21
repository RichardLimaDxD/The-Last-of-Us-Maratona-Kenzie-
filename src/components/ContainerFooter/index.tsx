import React from "react";
import imgLogo from "../../../src/assets/KenzieAcademyWVertical1.svg";
import imgLogoInstagram from "../../../src/assets/icons8-instagram-901.svg";
import imgLogoLinkedin from "../../../src/assets/LinkedIn.svg";
import { StyledContainerFooter } from "./style";

export const ContainerFooter = () => {
  return (
    <StyledContainerFooter>
      <img className="container__logoKenzie" src={imgLogo} alt="LogoKenzie" />
      <div className="container__divFooter">
        <h2>PROGRAME O SEU FUTURO AQUI.</h2>
        <span>SIGA NOSSAS REDES SOCIAIS.</span>
        <div>
          <img src={imgLogoInstagram} alt="LogoInstagram" />
          <img src={imgLogoLinkedin} alt="LogoLinkedin" />
        </div>
      </div>
    </StyledContainerFooter>
  );
};
