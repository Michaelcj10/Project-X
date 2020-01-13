import * as React from "react";
const mobile = require("../../images/computer.png");
import { motion } from "framer-motion";
import ImageLoader from "../atoms/imageLoader";
import styled from "styled-components";

const InfographicStyle = styled.div`
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f4661e"
            fillOpacity="1"
            d="M0,160L60,165.3C120,171,240,181,360,165.3C480,149,600,107,720,122.7C840,139,960,213,1080,229.3C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f4661e"
            fillOpacity="1"
            d="M0,96L30,80C60,64,120,32,180,48C240,64,300,128,360,154.7C420,181,480,171,540,149.3C600,128,660,96,720,117.3C780,139,840,213,900,229.3C960,245,1020,203,1080,160C1140,117,1200,75,1260,90.7C1320,107,1380,181,1410,218.7L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          />
        </svg>
      </div>
    </InfographicStyle>
  );
}

export default Infographic;
