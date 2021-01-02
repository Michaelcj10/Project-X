/** @jsx createElement */
import { createElement, Fragment, lazy } from "react";
import { Suspense } from "react";
import "../css/skeleton.css";
import { createGlobalStyle } from "styled-components";
import { Switch, Route } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    margin: auto;
    background: #0f121c;
    font-family: Mabry,sans-serif;
    overflow-x: hidden;
  }
  html{
    width: 100%;
    overflow-x: hidden;
  }
  h2,
  h3 {
    font-family: Mabry-Bold,sans-serif;;
  }

  P{
    font-family: Mabry-Light,sans-serif;;
  }

  h1{
    font-family: Mabry-Bold,sans-serif;;
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

const Home = lazy(() => import("./home"));
const Blog = lazy(() => import("./blog"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={null}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default App;
