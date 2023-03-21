import styled from "styled-components";

export const StyleDescriptionEpisode = styled.section`
  margin-top: 1rem;
  padding: 0px 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    margin-bottom: 2rem;
    font-family: Iceland;
    font-style: Regular;
    font-size: 3rem;
  }

  @media (min-width: 1019px) {
    width: 100%;
    margin-top: 1rem;
    padding: 0px 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;

    h2 {
      margin-bottom: 2rem;
      font-family: Iceland;
      font-size: 3rem;
    }
    p {
      width: 100%;
    }
  }
`;
