import styled from "styled-components";
import imgBackgroudTwo from "../../assets/1212581-the-last-of-us1.svg";

export const StyledContainerEpisodes = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-white);
  background: url(${imgBackgroudTwo});

  @media (min-width: 1019px) {
    display: flex;
    flex-direction: column;
    flex-direction: row;
    padding: 0 2rem;
  }
`;
