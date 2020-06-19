import * as React from "react";
import mobile from "../../images/design-1.png";
import mobileSecond from "../../images/mobile.png";
import mobileThird from "../../images/social.png";
import styled from "styled-components";
import InfographicBlock from "./infoBlock";
import bucket from "../../images/bucket.png";
import { motion } from "framer-motion";

const InfographicStyle = styled.div`

  .infographic-block {
    background: #fff;
  }
  .infographic-block svg:nth-of-type(1) {
    transform: rotate(180deg) translateY(2px);
  }
  .infographic-block img {
    max-width: 270px;
  }
  #bucket {
    max-width: 270px;
  }

  .infographic-block .columns {
    position: relative;
  }
  .img-block {
    margin-top: 50px;
    min-height: 250px;
  }
  .twelve {
    margin-bottom: 50px;
  }
  .twelve img {
    max-width: 90%;
  }
`;

function Infographic() {
  return (
    <InfographicStyle>
      <div className="infographic-block container">
        <div className="row">
          <div className="twelve columns centered">
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <h2>What we do </h2>
            </motion.div>
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1.5 }}
            >
              <img src={bucket} id="bucket" className="img-block greyed-on-touch" />
            </motion.div>
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <p>
                <a href="">Test link</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                augue quam, egestas vitae elementum eu, blandit vitae felis.
                Maecenas lobortis vehicula risus sit amet elementum.
              </p>
            </motion.div>
          </div>
        </div>

        <InfographicBlock
          imgSrc={mobile}
          heading={"Creative designs"}
          text={
            "We make custom, dynamic websites. Design is one of the most important factors in a website that converts and enages. We understand this and we endevour to make all our sites engaging and vibrant!."
          }
        />

        <InfographicBlock
          reverse={true}
          imgSrc={mobileSecond}
          heading={"Mobile responsive"}
          text={
            "Over 80% of the web is not mobile. Optimizing for mobile traffic is so important we make it our company ethos!. We gaurantee a great mobile experience. We aren't 'works on mobile' we're mobile first!"
          }
        />

        <InfographicBlock
          imgSrc={mobileThird}
          heading={"Social integration"}
          text={
            "50% of people have a social media count and that rises to 75% of business. We aim to make your website reach as much of the populous as we can by making your site integrate with social media seamlessly."
          }
        />
      </div>
    </InfographicStyle>
  );
}

export default Infographic;
