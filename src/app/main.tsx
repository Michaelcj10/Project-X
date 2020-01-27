import * as React from "react";
import "../css/skeleton.css";
import Header from "../components/header/header";
import Landing from "../components/landing/landing";
import Infographic from "../components/infographic/infographic";
import About from "../components/about/aboutInfo";
import { createGlobalStyle } from "styled-components";
import TeamInfo from "../components/team/teamInfo";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #3f3d56;
    padding-bottom: 300px;
  }

  h2,
  h3 {
    font-weight: bold;
  }

  h1{
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
  }

  .centered {
    text-align: center;
    margin: auto;
  }

  p {
    font-size: 16px;
    padding: 0 10px;
  }
  h3 {
    text-align: center;
    margin-top: 70px;
    font-size: 2rem;
  }
`;

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Infographic />
      <About />
      <TeamInfo />
      <GlobalStyle />
    </div>
  );
}

export default App;
