import * as React from "react";
import "../css/skeleton.css";
import Landing from "../components/landing/landing";
import Infographic from "../components/infographic/infographic";
import Banner from "../components/banner/banner";
import About from "../components/about/about";
import Form from "../components/contact/form";
import SiteFooter from "../components/footer/siteFooter";
import Boxes from "../components/boxes/boxesBlock";
import { GlobalStyle } from "./main";

function Home() {
  return (
    <div>
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

export default Home;
