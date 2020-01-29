import * as React from "react";
// @ts-ignore
import mobile from "../../images/illustration-6.svg";
// @ts-ignore
import mobileSecond from "../../images/illustration-5.svg";

import { motion } from "framer-motion";
import ImageLoader from "../atoms/imageLoader";
import styled from "styled-components";

const InfographicStyle = styled.div`
  .infographic-block {
    background: #fff;
    width: 90%;
    max-width: 1167px;
    margin: auto;
  }
  .infographic-block svg:nth-of-type(1) {
    transform: rotate(180deg) translateY(2px);
  }
  .infographic-block img {
    width: 450px;
    max-width: 90%;
  }

  .infographic-block .columns {
    position: relative;
  }
  .img-block {
    margin-top: 50px;
    min-height: 250px;
  }
  .row:nth-of-type(2) {
    margin-top: 50px;
  }
`;

function Infographic() {
  return (
    <InfographicStyle>
      <div className="infographic-block">
        <div className="row">
          <div className="one-half column centered padded">
            <motion.div
              animate={{ y: 30 }}
              transition={{ ease: "easeOut", duration: 1.4 }}
            >
              <h2>Creative designs</h2>
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
          <div className="one-half column centered padded">
            <div className="img-block greyed-on-touch">
              <ImageLoader
                width="350"
                imgSrc={mobileSecond}
                imgAlt={"Mobile"}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="one-half column centered padded">
            <div className="img-block greyed-on-touch">
              <ImageLoader
                width="350"
                imgSrc={mobile}
                imgAlt={"Mobile"}
              />
            </div>
          </div>
          <div className="one-half column centered padded">
            <motion.div
              animate={{ y: 30 }}
              transition={{ ease: "easeOut", duration: 1.4 }}
            >
              <h2>Mobile responsive</h2>
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
