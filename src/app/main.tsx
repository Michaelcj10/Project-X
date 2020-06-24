import * as React from "react";
import "../css/skeleton.css";
import Header from "../components/helper/header";
import Landing from "../components/landing/landing";
import Infographic from "../components/infographic/infographic";
import Banner from "../components/banner/banner";
import { createGlobalStyle } from "styled-components";
import Boxes from "../components/boxes/boxesBlock";
const GlobalStyle = createGlobalStyle`

  .container{
    max-width: 1167px;
    margin: auto;
  }

  body {
    margin: 0;
    padding: 0;
    color: #DDE2F4;
    padding-bottom: 300px;
    background:#23293a;
  }

  h2,
  h3 {
    font-weight: bold;
    color: #fff200;
  }

  h1{
    font-weight: bold;
    font-size: 7rem;
  }

  ::selection {
    background-color: #fff200;
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
      <Boxes />
      <Banner />
      <GlobalStyle />
    </div>
  );
}

export default App;
