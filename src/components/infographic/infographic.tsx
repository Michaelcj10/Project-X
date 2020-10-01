import * as React from "react";
import mobile from "../../images/spl2.png";
import mobileSecond from "../../images/mobile.png";
import mobileThird from "../../images/social.png";
import blob from "../../images/shapes-pink-2.png";
import green from "../../images/green.png";
import styled from "styled-components";
import InfographicBlock from "./infoBlock";
import { motion } from "framer-motion";

const InfographicStyle = styled.div`
  margin-top: -100px;
  background: #fff;

  .infographic-block {
    background: rgba(255, 255, 255, 0.7);
  }
  .infographic-block svg:nth-of-type(1) {
    transform: rotate(180deg) translateY(2px);
  }
  .infographic-block img {
    width: 350px;
    max-width: 90%;
  }
  #bucket {
    max-width: 270px;
  }

  .infographic-block .columns {
    position: relative;
  }
  .img-block {
    margin-top: 50px;
  }
  .twelve {
    margin-bottom: 50px;
  }
  .twelve img {
    max-width: 90%;
  }
  .blob {
    position: absolute;
    top: -50px;
    z-index: 999;
  }
  .green {
    height: 300px;
    margin-top: -165px;
    max-width: 90%;
  }
`;

function Infographic() {
  return (
    <InfographicStyle>
      <div className="infographic-block container">
        <img className="blob" src={blob} alt="blob" />
        <motion.div
          animate={{ y: 80 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <InfographicBlock
            breakColor="rgb(255 0 127)"
            imgSrc={mobile}
            heading={"Creative designs"}
            text={
              "We make custom, dynamic websites. Design is one of the most important factors in a website that converts and enages. We understand this and we endevour to make all our sites engaging and vibrant!."
            }
          />
        </motion.div>

        <motion.div
          animate={{ y: 80 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <InfographicBlock
            breakColor="rgb(195 59 217)"
            reverse={true}
            imgSrc={mobileSecond}
            heading={"Mobile responsive"}
            text={
              "Over 80% of the web is not mobile. Optimizing for mobile traffic is so important we make it our company ethos!. We gaurantee a great mobile experience. We aren't 'works on mobile' we're mobile first!"
            }
          />
        </motion.div>
        <motion.div
          animate={{ y: 80 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <InfographicBlock
            breakColor="rgb(159 251 104)"
            imgSrc={mobileThird}
            heading={"Social integration"}
            text={
              "50% of people have a social media count and that rises to 75% of business. We aim to make your website reach as much of the populous as we can by making your site integrate with social media seamlessly."
            }
          />
        </motion.div>
      </div>
      <img className="green" src={green} />
    </InfographicStyle>
  );
}

export default Infographic;
