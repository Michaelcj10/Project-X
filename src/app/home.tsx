/** @jsx createElement */
import { createElement, Fragment } from "react";
import "../css/skeleton.css";
import Landing from "../components/landing/landing";
import AboutCompany from "../components/about/aboutCompany";
import CompanyDetails from "../components/details/companyDetails";
import CookieBanner from "../components/policy/cookieBanner";
import WhyUseUs from "../components/whyus/why";
import Form from "../components/contact/form";
import Seo from "../components/seoDetails/seo";
import OurServices from "../components/services/ourServices";
import { GlobalStyle } from "./main";
import Header from "../components/helper/header";

function Home() {
  return (
    <Fragment>
      <Header />
      <CookieBanner />
      <Landing />
      <AboutCompany />
      <OurServices />
      <WhyUseUs />
      <Seo />
      <CompanyDetails />
      <Form />
      <GlobalStyle />
    </Fragment>
  );
}

export default Home;
