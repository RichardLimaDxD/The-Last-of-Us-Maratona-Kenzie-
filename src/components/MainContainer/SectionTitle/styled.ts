import styled from "styled-components";

export const StyledSectionTitle = styled.section`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 1rem;

  h1 {
    font-family: Iceland;
    font-style: Regular;
    color: var(--color-white);
    font-size: 2.5rem;
    font-weight: 400;
  }

  p {
    color: var(--color-white);
    font-family: Actor;
    font-style: Regular;
    font-size: 1rem;
    line-height: 2rem;
    line-height: 102%;
    width: 78%;
    vertical-align: Top;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  div > button {
    height: 45px;
    border: none;
  }

  div > button > h3 {
    border: 2px solid white;
    padding: 4px;
    font-weight: 600;
  }

  .container__redButton {
    background-color: var(--color-red);
    color: white;
  }

  .container__grayButton {
    background-color: var(--color-grey);
    color: var(--color-grey2);
  }

  @media (min-width: 1019px) {
    margin-top: 5rem;
    padding: 04rem;

    h1 {
      font-size: 4.5rem;
    }

    p {
      width: 38%;
      font-size: 1.5rem;
    }
  }
`;
