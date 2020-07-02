import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  /**
   * Tratativa de erros diferente no Javascript/Typescript
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
