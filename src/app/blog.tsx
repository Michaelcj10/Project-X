import * as React from "react";
import "../css/skeleton.css";
import Header from "../components/helper/header";
import { GlobalStyle } from "./main";

function Blog() {
  return (
    <div>
      <Header />
      <h1>blog</h1>
      <GlobalStyle />
    </div>
  );
}

export default Blog;
