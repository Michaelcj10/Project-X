/** @jsx createElement */
import { createElement } from "react";
import * as ReactDOM from "react-dom";
import App from "./app/main";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
