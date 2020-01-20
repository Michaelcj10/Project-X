import * as React from "react";
const mobile = require("../../images/landing-1.png");
import { motion } from "framer-motion";
import ImageLoader from "../atoms/imageLoader";
import styled from "styled-components";

const InfographicStyle = styled.div`
  .infographic-block {
    background: #fff;
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffd248"
              fillOpacity="1"
              d="M0,64L30,58.7C60,53,120,43,180,42.7C240,43,300,53,360,96C420,139,480,213,540,234.7C600,256,660,224,720,197.3C780,171,840,149,900,165.3C960,181,1020,235,1080,224C1140,213,1200,139,1260,122.7C1320,107,1380,149,1410,170.7L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            />
          </svg>
        </div>
      </div>
    </InfographicStyle>
  );
}

export default Infographic;
