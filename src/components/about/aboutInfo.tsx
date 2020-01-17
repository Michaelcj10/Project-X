import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Lock } from "styled-icons/material";
import { PhoneAndroid } from "styled-icons/material/PhoneAndroid";
import { Flashlight } from "styled-icons/remix-fill/Flashlight";

const AboutStyle = styled.div`
  .about-block {
    background: #ededed;
  }
  .item-row {
    display: flex;
    align-items: center;
  }
  .item {
  }
  svg {
    margin-top: -10px;
  }
  .item:nth-of-type(1) {
    margin-top: -90px;
  }
  .item:nth-of-type(2) {
    margin-top: -45px;
  }
  @media (max-width: 560px) {
    .item:nth-of-type(1) {
      margin-top: -45px;
    }
    .item:nth-of-type(2) {
      margin-top: -22px;
    }
  }
  h3 {
    color: #2b2c34;
  }
`;

function About() {
  return (
    <AboutStyle>
      <div className="about-block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L30,80C60,64,120,32,180,48C240,64,300,128,360,154.7C420,181,480,171,540,149.3C600,128,660,96,720,117.3C780,139,840,213,900,229.3C960,245,1020,203,1080,160C1140,117,1200,75,1260,90.7C1320,107,1380,181,1410,218.7L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          />
        </svg>
        <div className="item-row">
          <div className="item centered">
            <motion.div
              animate={{ y: 30 }}
              transition={{ ease: "easeOut", duration: 1.2 }}
            >
              <Lock width={65} fill="#2b2c34" />
            </motion.div>
          </div>
          <div className="item centered">
            <motion.div
              animate={{ y: 30 }}
              transition={{ ease: "easeOut", duration: 1.6 }}
            >
              <PhoneAndroid width={65} fill="#2b2c34" />
            </motion.div>
          </div>
          <div className="item centered">
            <motion.div
              animate={{ y: 30 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <Flashlight width={65} fill="#2b2c34" />
            </motion.div>
          </div>
        </div>
        <h3>Secure, responsive and fast</h3>
      </div>
    </AboutStyle>
  );
}

export default About;
