import styled from "styled-components";

export const StyledContainerFooter = styled.section`
  background: linear-gradient(#000000, #950202);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 2rem;
  color: var(--color-grey2);

  .container__logoKenzie {
    height: 100px;
  }

  .container__divFooter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .container__divFooter > h2 {
    font-size: 1.5rem;
    font-family: "Iceland";
    margin-top: 1rem;
  }

  .container__divFooter > span {
    font-size: 0.6rem;
  }
`;
