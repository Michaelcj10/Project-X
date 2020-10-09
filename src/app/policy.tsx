import * as React from "react";
import "../css/skeleton.css";
import Header from "../components/helper/header";
import { GlobalStyle } from "./main";
import { Card } from "../components/helper/mainCard";
import { motion } from "framer-motion";
import styled from "styled-components";
import InfographicBlock from "../components/infographic/infoBlock";
import mobile from "../images/vault.png";
import mobileSecond from "../images/pc.png";
import mobileThird from "../images/cookies.png";

const CardStyle = styled.div`
  .row {
    background: rgba(255, 255, 255, 0.7);
    padding: 10px 10px;
  }
  > div {
    align-items: baseline;
    height: auto;
    text-align: left;
    padding-bottom: 200px;
    margin-bottom: 100px;
  }
  img {
    width: 300px;
    max-width: 90%;
  }
`;

function Policy() {
  return (
    <CardStyle>
      <Card>
        <Header defaultUnderlineColor="#32eb91" />
        <div className="row container">
          <div className="twelve columns centered">
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <h1>Púca Policy</h1>
            </motion.div>

            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 2.4 }}
            >
              <InfographicBlock
                breakColor="rgb(91 255 194)"
                imgSrc={mobileSecond}
                heading={"Common"}
                text={
                  "In common with other websites, log files are stored on the web server saving details such as the visitor's IP address, browser type, referring page and time of visit. Cookies may be used to remember visitor preferences when interacting with the website. Where registration is required, the visitor's email and a username will be stored on the server."
                }
              />
            </motion.div>

            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1.6 }}
            >
              <InfographicBlock
                breakColor="rgb(203 237 249)"
                imgSrc={mobile}
                reverse={true}
                heading={"Stored info"}
                text={
                  "The information is used to enhance the vistor's experience when using the website to display personalised content and possibly advertising. E-mail addresses will not be sold, rented or leased to 3rd parties. E-mail may be sent to inform you of news of our services or offers by us or our affiliates."
                }
              />
            </motion.div>

            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <InfographicBlock
                breakColor="rgb(208 151 42)"
                imgSrc={mobileThird}
                heading={"Cookies"}
                text={
                  "Cookies are small digital signature files that are stored by your web browser that allow your preferences to be recorded when visiting the website. Also they may be used to track your return visits to the website. 3rd party advertising companies may also use cookies for tracking purposes."
                }
              />
            </motion.div>
          </div>
        </div>
        <GlobalStyle />
      </Card>
    </CardStyle>
  );
}

export default Policy;
