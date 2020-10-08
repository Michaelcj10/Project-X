import * as React from "react";
import "../css/skeleton.css";
import Home from "./home";
import Blog from "./blog";
import Policy from "./policy";
import { createGlobalStyle } from "styled-components";
import { Switch, Route } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`

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
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/policy" component={Policy} />
      </Switch>
    </div>
  );
}

export default App;
