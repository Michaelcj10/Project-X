import * as React from "react";
import { motion } from "framer-motion";
import Button from "../atoms/button";
const devImg = require("../../images/mobile-2.svg");
const landingImg = require("../../images/landing-1.png");
import ImageLoader from "../atoms/imageLoader";
import styled from "styled-components";

const LandingStyle = styled.div`
  .hero-block {
    text-align: center;
    position: relative;
    display: table;
    height: 100vh;
    width: 100%;
    margin-top: -10px;
    background: #fff;
    background-repeat: no-repeat;
    background-image: url(${landingImg});
    background-position: center;
    background-size: cover;
  }

  .hero-block p {
    color: #000;
  }

  .hero-block .row {
    display: table-cell;
    vertical-align: middle;
  }

  .hero-block .columns {
    position: relative;
  }

  .hero-block svg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .hero-block svg:nth-child(1) {
    bottom: 0;
    z-index: 2;
  }

  .hero-block img {
    width: 300px;
    max-width: 90%;
  }

  button {
    margin-bottom: 50px;
  }

  .twelve {
    margin-top: -70px;
  }

  .six:nth-of-type(1) {
    margin-top: -50px;
  }
  .six:nth-of-type(2) {
    min-height: 300px;
  }
`;

function Landing() {
  return (
    <LandingStyle>
      <div className="hero-block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L34.3,74.7C68.6,85,137,107,206,112C274.3,117,343,107,411,117.3C480,128,549,160,617,192C685.7,224,754,256,823,245.3C891.4,235,960,181,1029,170.7C1097.1,160,1166,192,1234,197.3C1302.9,203,1371,181,1406,170.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f8f8f8"
            fillOpacity="1"
            d="M0,160L30,160C60,160,120,160,180,144C240,128,300,96,360,69.3C420,43,480,21,540,48C600,75,660,149,720,170.7C780,192,840,160,900,138.7C960,117,1020,107,1080,117.3C1140,128,1200,160,1260,149.3C1320,139,1380,85,1410,58.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </svg>
        <div className="row">
          <div className="six columns centered">
            <motion.div
              animate={{ y: 30 }}
              transition={{ ease: "easeOut", duration: 1.2 }}
            >
              <h1>Púca Studios</h1>
            </motion.div>
            <motion.div
              animate={{ y: 30 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <p>Website and application development with a difference.</p>
            </motion.div>
            <motion.div
              animate={{ y: 30 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <Button text="Learn more" />
            </motion.div>
          </div>
          <div className="six columns centered">
            <ImageLoader
              width="300"
              count={10}
              imgSrc={devImg}
              imgAlt={"Landing image"}
            />
          </div>
        </div>
      </div>
    </LandingStyle>
  );
}

export default Landing;
