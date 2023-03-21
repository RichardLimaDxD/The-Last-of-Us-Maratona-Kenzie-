import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextsCarsSection } from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextsCarsSection>
      <App />
    </ContextsCarsSection>
  </React.StrictMode>
);
