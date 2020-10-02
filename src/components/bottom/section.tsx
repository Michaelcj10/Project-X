import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import mobile from "../../images/bucket.png";
import InfographicBlock from "../infographic/infoBlock";

const InfographicStyle = styled.div`
  background: #fff;

  .infographic-block {
    margin-top: -100px;
    background: #fff;
  }

  .twelve {
    text-align: center;
  }

  img {
    max-width: 100%;
  }
`;

function Bottom() {
  return (
    <InfographicStyle>
      <div className="infographic-block container">
        <div className="row">
          <div className="twelve">
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <InfographicBlock
                breakColor="rgb(255 0 127)"
                imgSrc={mobile}
                heading={"Should I have a website?"}
                text={
                  "The answer is yes. There aren't many businesses that can survive without a Web presence and there's no reason not to have a website. Your company's website can be a highly effective marketing tool that can be very cost-efficient."
                }
              />
            </motion.div>
          </div>
        </div>
      </div>
    </InfographicStyle>
  );
}

export default Bottom;
