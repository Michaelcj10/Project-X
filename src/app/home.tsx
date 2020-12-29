/** @jsx createElement */
import { createElement } from "react";
import "../css/skeleton.css";
import Landing from "../components/landing/landing";
import AboutCompany from "../components/about/aboutCompany";
import CompanyDetails from "../components/details/companyDetails";
import WhyUseUs from "../components/whyus/why";
import Seo from "../components/seoDetails/seo";
import { GlobalStyle } from "./main";

function Home() {
  return (
    <div>
      <Landing />
      <AboutCompany />
      <WhyUseUs />
      <Seo />
      <CompanyDetails />
      <GlobalStyle />
    </div>
  );
}

export default Home;
