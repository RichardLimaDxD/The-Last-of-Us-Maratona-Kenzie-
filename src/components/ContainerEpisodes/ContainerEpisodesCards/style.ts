import styled from "styled-components";

export const StyledContainerEpisodesCards = styled.ul`
  margin-top: 1rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1019px) {
    height: 28rem;
    margin-top: 1rem;
    padding: 0px 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow-x: auto;

    ::-webkit-scrollbar {
      background-color: var(--color-red);
      border-radius: 20px;
      border: 3px solid black;
    }
  }
`;
