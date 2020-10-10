import * as React from "react";
import "../css/skeleton.css";
import Header from "../components/helper/header";
import { GlobalStyle } from "./main";
import { Card } from "../components/helper/mainCard";
import { motion } from "framer-motion";
import styled from "styled-components";

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
`;

function Policy() {
  return (
    <CardStyle>
      <Card>
        <Header defaultUnderlineColor="#32eb91" />
        <div className="row wrap">
          <div className="twelve columns centered">
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 0.6 }}
            >
              <h1>Púca Policy</h1>
            </motion.div>

            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <h2 style={{ marginTop: "75px" }}>Common</h2>
              <p>
                In common with other websites, log files are stored on the web
                server saving details such as the visitor's IP address, browser
                type, referring page and time of visit. Cookies may be used to
                remember visitor preferences when interacting with the website.
                Where registration is required, the visitor's email and a
                username will be stored on the server.
              </p>
              <div className="dn-break" />
            </motion.div>

            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1.6 }}
            >
              <h2>Stored info</h2>
              <p>
                The information is used to enhance the vistor's experience when
                using the website to display personalised content and possibly
                advertising. E-mail addresses will not be sold, rented or leased
                to 3rd parties. E-mail may be sent to inform you of news of our
                services or offers by us or our affiliates.
              </p>
              <div className="dn-break" />
            </motion.div>

            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <h2>Cookies</h2>
              <p>
                Cookies are small digital signature files that are stored by
                your web browser that allow your preferences to be recorded when
                visiting the website. Also they may be used to track your return
                visits to the website. 3rd party advertising companies may also
                use cookies for tracking purposes.
              </p>
              <div className="dn-break" />
            </motion.div>
          </div>
        </div>
        <GlobalStyle />
      </Card>
    </CardStyle>
  );
}

export default Policy;
