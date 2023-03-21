import styled from "styled-components";

export const StyledRenderEpisodesCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  div > li > h2 {
    font-family: Darker Grotesque;
    font-style: SemiBold;
    font-size: 1.3rem;
  }

  div > li > p {
    font-family: Darker Grotesque;
    font-style: Regular;
  }

  @media (min-width: 1019px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-direction: row;
  }
`;
