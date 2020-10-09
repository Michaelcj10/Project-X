import * as React from "react";
import "../css/skeleton.css";
import Header from "../components/helper/header";
import { GlobalStyle } from "./main";
import { Card } from "../components/helper/mainCard";

function Blog() {
  return (
    <Card>
      <Header defaultUnderlineColor="rgb(195 59 217)" />
      <GlobalStyle />
    </Card>
  );
}

export default Blog;
