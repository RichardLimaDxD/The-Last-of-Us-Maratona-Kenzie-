import styled from "styled-components";
import ImgBackGround from "../../assets/1299920.jpg";

export const StyledBackgroundWallpaper = styled.div`
  background: url(${ImgBackGround});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 60rem;
`;

export const StyledHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 1rem 1rem;

  img {
    width: 150px;
  }

  .container__desktopNav {
    display: none;
  }

  .container__mobileNav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .menuIcon {
    color: white;
  }

  ul {
    color: var(--color-white);
  }

  li {
    font-family: Iceland;
    font-style: Regular;
    margin-top: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
  }

  @media (min-width: 798px) {
    ul {
      color: black;
    }
  }

  @media (min-width: 1019px) {
    padding: 1rem 4rem;
    .container__desktopNav {
      display: flex;
    }

    .container__mobileNav {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: row;
      gap: 4rem;
      color: black;
    }

    li {
      font-size: 1.5rem;
    }
  }
`;
