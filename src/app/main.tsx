import * as React from "react";
import "../css/skeleton.css";
import Header from "../components/header/header";
import Landing from "../components/landing/landing";
import Infographic from "../components/infographic/infographic";
import About from "../components/about/aboutInfo";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #2b2c34;
    padding-bottom: 300px;
  }

  h1,
  h2,
  h3 {
    color: #2b2c34;
    font-weight: bold;
  }

  .centered {
    text-align: center;
    margin: auto;
  }

  p {
    font-size: 16px;
    padding: 0 10px;
  }
`;

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Infographic />
      <About />
      <GlobalStyle />
    </div>
  );
}

export default App;
