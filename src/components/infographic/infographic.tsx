import * as React from "react";
const mobile = require("../../images/computer.png");
import { motion } from "framer-motion";
import ImageLoader from "../atoms/imageLoader";
import styled from "styled-components";

const InfographicStyle = styled.div`
  .infographic-block {
    background: white;
    padding-bottom: 50px;
  }
  .infographic-block svg:nth-of-type(1) {
    transform: rotate(180deg) translateY(2px);
  }
  .infographic-block svg:nth-of-type(3) {
    transform: translateY(-10px);
  }

  .infographic-block img {
    width: 300px;
    max-width: 90%;
  }

  .infographic-block .columns {
    position: relative;
  }
  .img-block {
    min-height: 250px;
  }
`;

function Infographic() {
  return (
    <InfographicStyle>
      <div className="infographic-block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,288L48,256C96,224,192,160,288,133.3C384,107,480,117,576,112C672,107,768,85,864,80C960,75,1056,85,1152,106.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        <div className="row">
          <div className="six columns centered">
            <div className="img-block">
              <ImageLoader
                width="250"
                height="250"
                imgSrc={mobile}
                isCircle={true}
                imgAlt={"Mobile"}
              />
            </div>
          </div>
          <div className="six columns centered">
            <motion.div
              animate={{ y: 30 }}
              transition={{ ease: "easeOut", duration: 1.4 }}
            >
              <h2>What we do</h2>
            </motion.div>

            <motion.div
              animate={{ y: 30 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <p>
                We make high quality , mobile responsive and SEO compliant
                websites. If you want to get full exposure for your business, or
                you just want a personal site to show off your holiday snaps, or
                wedding photos, we've got you covered!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </InfographicStyle>
  );
}

export default Infographic;
