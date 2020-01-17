import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ImageLoader from "../atoms/imageLoader";
const dev = require("../../images/x.png");
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";

const TeamStyle = styled.div`
  svg {
    margin-top: -22px;
  }
  .team-block img {
    max-width: 90%;
    margin-top: 25px;
    width: 350px;
  }
  .six svg {
    cursor: pointer;
  }
  .team-block .twelve {
    position: relative;
    margin-top: 100px;
  }
  p {
    max-width: 540px;
    margin: auto;
    width: 90%;
  }
  .row:nth-of-type(1) {
    margin-top: -120px;
  }
  @media (max-width: 560px) {
    .six:nth-of-type(2) {
      margin-top: 0px;
    }
  }
`;

function TeamInfo() {
  return (
    <TeamStyle>
      <div className="team-block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ededed"
            fillOpacity="1"
            d="M0,32L24,48C48,64,96,96,144,112C192,128,240,128,288,138.7C336,149,384,171,432,181.3C480,192,528,192,576,176C624,160,672,128,720,117.3C768,107,816,117,864,112C912,107,960,85,1008,69.3C1056,53,1104,43,1152,80C1200,117,1248,203,1296,229.3C1344,256,1392,224,1416,208L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          />
        </svg>
        <div className="row">
          <div className="twelve columns centered">
            <motion.div
              animate={{ y: 30 }}
              transition={{ ease: "easeOut", duration: 1.4 }}
            >
              <h2>Our team</h2>
            </motion.div>
          </div>
        </div>

        <div className="row">
          <div className="six columns centered">
            <motion.div
              animate={{ y: 30 }}
              transition={{ ease: "easeOut", duration: 1.4 }}
            >
              <div className="img-block">
                <h3>Michael James - Front End Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse facilisis dolor a vulputate convallis. Proin et
                  tincidunt mi. Ut at quam vel nunc consectetur semper efficitur
                  non magna.
                </p>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: 60 }}
              transition={{ ease: "easeOut", duration: 1.6 }}
            >
              <LinkedinSquare width={50} />
            </motion.div>
          </div>
          <div className="six columns centered">
            <motion.div
              animate={{ y: 60 }}
              transition={{ ease: "easeOut", duration: 2.3 }}
            >
              <div className="img-block">
                <ImageLoader
                  width="250"
                  height="250"
                  imgSrc={dev}
                  isCircle={true}
                  imgAlt={"Mobile"}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </TeamStyle>
  );
}

export default TeamInfo;
