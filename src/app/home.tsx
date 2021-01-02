/** @jsx createElement */
import { createElement } from "react";
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

function Home() {
  return (
    <div>
      <CookieBanner />
      <Landing />
      <AboutCompany />
      <OurServices />
      <WhyUseUs />
      <Seo />
      <CompanyDetails />
      <Form />
      <GlobalStyle />
    </div>
  );
}

export default Home;
