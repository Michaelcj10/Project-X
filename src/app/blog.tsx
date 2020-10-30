import * as React from "react";
import "../css/skeleton.css";
import Header from "../components/helper/header";
import { GlobalStyle } from "./main";
import { Card } from "../components/helper/mainCard";
import { motion } from "framer-motion";
import styled from "styled-components";
import SiteFooter from "../components/footer/siteFooter";
const CardStyle = styled.div`
  .row {
    padding: 10px 10px;
  }
  > div {
    align-items: baseline;
    height: auto;
    text-align: left;
  }
  .wrap {
    max-width: 700px;
    width: 90%;
    margin: auto;
  }

  .terms-container {
    width: 95%;
    margin: auto;
    margin-top: 150px;
    padding-bottom: 200px;
  }
`;

function Blog() {
  return (
    <CardStyle>
      <Card>
        <Header />
        <div className="row wrap">
          <div className="twelve columns centered">
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 0.6 }}
            >
              <h2>Blogs</h2>
            </motion.div>
            <div className="terms-container">Nothing yet</div>
          </div>
        </div>
        <GlobalStyle />
      </Card>
      <SiteFooter />
    </CardStyle>
  );
}

export default Blog;
