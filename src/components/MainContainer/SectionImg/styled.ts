import styled from "styled-components";
import ImgOne from "../../../assets/EP22.svg";
import Imgtwo from "../../../assets/the-last-of-us1.svg";
import ImgThree from "../../../assets/FF3P7D3VJ5DZ5FGALN2YYQU3ZM1.svg";

export const StyleSectionImg = styled.section`
  padding: 0 2rem;
  margin-top: 2rem;

  h2 {
    font-size: 2.5rem;
    color: var(--color-white);
    margin-bottom: 2rem;
    font-family: Iceland;
    font-style: Regular;
  }

  .container__imgCards {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .firstCardImg {
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.2)),
      url(${ImgOne});
    background-size: cover;
    width: 262px;
    height: 140px;
  }

  .firstCardImg > h4 {
    text-align: center;
    padding: 4rem;
    font-family: Iceland;
    font-style: Regular;
    color: var(--color-white);
  }

  .secondCardImg {
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1)),
      url(${Imgtwo});
    background-size: cover;
    width: 262px;
    height: 140px;
  }

  .secondCardImg > h4 {
    text-align: center;
    padding: 4rem;
    font-family: Iceland;
    font-style: Regular;
    color: var(--color-white);
  }

  .thirdCardImg {
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1)),
      url(${ImgThree});
    background-size: cover;
    width: 262px;
    height: 140px;
  }

  .thirdCardImg > h4 {
    text-align: center;
    padding: 4rem;
    font-family: Iceland;
    font-style: Regular;
    color: var(--color-white);
  }

  @media (min-width: 1019px) {
    padding: 0px 4rem;
    margin-top: 8rem;

    h2 {
      font-size: 4rem;
    }
    .container__imgCards {
      flex-direction: row;
    }
  }
`;
