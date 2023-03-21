import React from "react";
import { StyledSectionTitle } from "./styled";

export const SectionTitle = () => {
  return (
    <StyledSectionTitle>
      <h1 id="Home">THE LAST OF US</h1>
      <p>
        When you are lost in the dark, look for the light, believe in the
        fireflies.
      </p>
      <div>
        <button className="container__redButton">
          <h3>
            <a
              href="https://www.playstation.com/pt-br/the-last-of-us/?emcid=pa-1s-466118&gclid=CjwKCAjwq-WgBhBMEiwAzKSH6Cb0ZEC213xSsle8HRFmlZnzXPxjIkV1gvBBcNKNrOKwXStEc8jJEBoCnjMQAvD_BwE"
              target={"_blank"}
            >
              MORE INFO
            </a>
          </h3>
        </button>
        <button className="container__grayButton">
          <h3>
            <a
              href="https://www.youtube.com/watch?v=uLtkt8BonwM"
              target={"_blank"}
            >
              WATCH TEASER
            </a>
          </h3>
        </button>
      </div>
    </StyledSectionTitle>
  );
};
