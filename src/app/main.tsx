import * as React from "react";
import "../css/skeleton.css";
import Header from "../components/helper/header";
import Landing from "../components/landing/landing";
import Infographic from "../components/infographic/infographic";
import Banner from "../components/banner/banner";
import { createGlobalStyle } from "styled-components";
import TeamInfo from "../components/team/teamInfo";
const GlobalStyle = createGlobalStyle`

  .container{
    max-width: 1167px;
    margin: auto;
  }

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
    font-size: 7rem;
  }

  ::selection {
    background-color: #3ef8f4;
    color: #fff;
  }

  .centered {
    text-align: center;
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
  
  .padded {
    padding: 0px 25px;
  }

  .greyed-on-touch{
    transition: all 0.5s;
  }
  .greyed-on-touch:hover{
    transition: all 0.5s;
    filter: grayscale(100%);
  }
  a{
    font-weight: bold;
    margin-right: 10px;
    text-decoration: none;
  }

`;

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Infographic />
      <TeamInfo />
      <Banner />
      <GlobalStyle />
    </div>
  );
}

export default App;
