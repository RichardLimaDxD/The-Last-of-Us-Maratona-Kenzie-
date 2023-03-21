import firstImg from "../../../assets/EP22.svg";
import second from "../../../assets/the-last-of-us1.svg";
import third from "../../../assets/FF3P7D3VJ5DZ5FGALN2YYQU3ZM1.svg";
import { StyleSectionImg } from "./styled";

export const SectionImg = () => {
  return (
    <StyleSectionImg>
      <h2>Inside</h2>
      <div className="container__imgCards">
        <div className="firstCardImg">
          <h4>SURVIVAL</h4>
        </div>

        <div className="secondCardImg">
          <h4>RELATIONSHIP</h4>
        </div>

        <div className="thirdCardImg">
          <h4>ADVENTURE</h4>
        </div>
      </div>
    </StyleSectionImg>
  );
};
