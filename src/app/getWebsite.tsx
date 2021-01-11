/** @jsx createElement */
import { createElement, Fragment } from "react";
import Header from "../components/helper/header";
import CookieBanner from "../components/policy/cookieBanner";
import AboutSite from "../components/getWebsite/aboutSite";
import Process from "../components/getWebsite/process";
import { GlobalStyle } from "./main";
import "../css/skeleton.css";
import Form from "../components/contact/form";

function GetWebsite() {
  return (
    <Fragment>
      <Header />
      <CookieBanner />
      <AboutSite />
      <Process />
      <Form />
      <GlobalStyle />
    </Fragment>
  );
}

export default GetWebsite;
