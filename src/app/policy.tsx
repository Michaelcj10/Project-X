import * as React from "react";
import "../css/skeleton.css";
import Header from "../components/helper/header";
import { GlobalStyle } from "./main";
import { Card } from "../components/helper/mainCard";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Accordion } from "../components/accordion/accordion";
import { useState } from "react";
import landingImg from "../images/shapes-green.png";
import yellow from "../images/y.png";
import green from "../images/l.png";

const CardStyle = styled.div`
  .row {
    padding: 10px 10px;

    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }
  > div {
    align-items: baseline;
    height: auto;
    text-align: left;
    padding-bottom: 200px;
    margin-bottom: 100px;
  }

  .dn-break {
    width: 200px;
    max-width: 70%;
    margin: auto;
    height: 4px;
    background: rgb(34 34 34);
    margin-bottom: 100px;
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
  p {
    background: #ffffffdb;
    border-radius: 40px 31px 48px 51px;
    padding: 15px;
  }
`;

function Policy() {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <CardStyle>
      <Card>
        <Header />
        <div
          className="row wrap"
          style={{
            backgroundImage: `url(${
              expanded === 0 ? yellow : expanded === 3 ? landingImg : green
            })`,
          }}
        >
          <div className="twelve columns centered">
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 0.6 }}
            >
              <h2>Our Policies</h2>
            </motion.div>
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 0.8 }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ullamcorper dignissim diam sit amet fermentum. Proin lobortis et
                quam et fringilla. Nunc semper quis metus eu blandit. Morbi
                hendrerit non quam non laoreet.
              </p>
            </motion.div>
            <div className="terms-container">
              <Accordion
                heading="Common"
                text="In common with other websites, log files are stored on the web
                server saving details such as the visitor's IP address, browser
                type, referring page and time of visit. Cookies may be used to
                remember visitor preferences when interacting with the website.
                Where registration is required, the visitor's email and a
                username will be stored on the server."
                key={0}
                expanded={expanded}
                setExpanded={setExpanded}
                i={0}
                activeColor="#fff200"
              />
              <Accordion
                heading="Stored info"
                text="The information is used to enhance the vistor's experience when
                using the website to display personalised content and possibly
                advertising. E-mail addresses will not be sold, rented or leased
                to 3rd parties. E-mail may be sent to inform you of news of our
                services or offers by us or our affiliates."
                key={2}
                expanded={expanded}
                setExpanded={setExpanded}
                i={2}
                activeColor="#a0fc69"
              />
              <Accordion
                heading="Cookies"
                text="Cookies are small digital signature files that are stored by
                your web browser that allow your preferences to be recorded when
                visiting the website. Also they may be used to track your return
                visits to the website. 3rd party advertising companies may also
                use cookies for tracking purposes."
                key={3}
                expanded={expanded}
                setExpanded={setExpanded}
                i={3}
                activeColor="#00ffff"
              />
            </div>
          </div>
        </div>
        <GlobalStyle />
      </Card>
    </CardStyle>
  );
}

export default Policy;
