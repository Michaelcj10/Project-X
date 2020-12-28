/** @jsx createElement */
import { createElement } from "react";
import "../css/skeleton.css";
import Landing from "../components/landing/landing";
import AboutCompany from "../components/about/aboutCompany";
import CompanyDetails from "../components/details/companyDetails";
import Seo from "../components/seoDetails/seo";
import { GlobalStyle } from "./main";

function Home() {
  return (
    <div>
      <Landing />
      <AboutCompany />
      <CompanyDetails />
      <Seo />
      <GlobalStyle />
    </div>
  );
}

export default Home;
