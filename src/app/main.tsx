import * as React from "react";
import { Suspense } from "react";
import "../css/skeleton.css";
import { createGlobalStyle } from "styled-components";
import { Switch, Route } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0 15px;
    margin: auto;
    background: #0a0a0a;
    font-family: Roboto;
    overflow-x: hidden;
    box-shadow: rgba(21, 25, 68, 0.13) 0px 2px 20px 0px, rgba(21, 25, 68, 0.06) 0px 3px 12px -8px, rgba(21, 25, 68, 0.03) 0px 1px 6px -2px;
  }
  html{
    width: 100%;
      overflow-x: hidden;
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

function App() {
  return (
    <div>
      <Suspense fallback={null}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
