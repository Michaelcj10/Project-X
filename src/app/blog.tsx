import * as React from "react";
import "../css/skeleton.css";
import Header from "../components/helper/header";
import { GlobalStyle } from "./main";
import { Card } from "../components/helper/mainCard";

function Blog() {
  return (
    <Card>
      <Header />
      <GlobalStyle />
    </Card>
  );
}

export default Blog;
