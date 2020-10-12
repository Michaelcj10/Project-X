import * as React from "react";
import { Suspense } from "react";
import "../css/skeleton.css";
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
    font-family: Roboto;
  }

  h2,
  h3 {
    font-family: Roboto-Bold;
  }

  h1{
    font-family: Roboto-Bold;
    font-size: 9rem;
  }

  .centered {
    text-align: center;
  }

  p {
    font-size: 1.25em;
    color: #282c34;
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
`;

const Home = React.lazy(() => import("./home"));
const Blog = React.lazy(() => import("./blog"));
const Policy = React.lazy(() => import("./policy"));

function App() {
  return (
    <div>
      <Suspense fallback={null}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/policy" component={Policy} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
