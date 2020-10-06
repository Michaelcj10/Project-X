import * as React from "react";
import "../css/skeleton.css";
import Header from "../components/helper/header";
import Landing from "../components/landing/landing";
import Infographic from "../components/infographic/infographic";
import Banner from "../components/banner/banner";
import About from "../components/about/about";
import Form from "../components/contact/form";
import SiteFooter from "../components/footer/siteFooter";
import { createGlobalStyle } from "styled-components";
import Boxes from "../components/boxes/boxesBlock";
const GlobalStyle = createGlobalStyle`

  .container{
    max-width: 1167px;
    margin: auto;
  }

  .container-half{
    max-width: 600px;
    margin: auto;
  }

  body {
    margin: 0;
    padding: 0;
    width: 90vw;
    margin: auto;
    margin-top: 3vw;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    background: #f1f1f161;
  }

  h2,
  h3 {
    font-weight: bold;
  }

  h1{
    font-weight: bold;
    font-size: 10rem;
  }

  ::selection {
    background-color: #0ff;
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

  button{
    outline: none;
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
      <About />
      <Form />
      <SiteFooter />
      <GlobalStyle />
    </div>
  );
}

export default App;
