import * as React from "react";
import ImageLoader from "../atoms/inputs/imageLoader";
import { motion } from "framer-motion";
import styled from "styled-components";

const InfoBlockStyle = styled.div`
  margin-top: 50px;
  p {
    margin-top: 50px;
  }
  .dn-break {
    width: 60%;
    margin: auto;
    height: 2px;
    background: #f8f23e;
  }
`;

interface Props {
  imgSrc: string;
  text: string;
  heading: string;
  reverse?: boolean;
}

function InfographicBlock(props: Props) {
  const textContent = (
    <div className="one-half column centered padded">
      <motion.div
        animate={{ y: 50 }}
        transition={{ ease: "easeOut", duration: 1.4 }}
      >
        <h2>{props.heading}</h2>
      </motion.div>
      <motion.div
        animate={{ y: 30 }}
        transition={{ ease: "easeOut", duration: 1.6 }}
      >
        <p>{props.text}</p>
        <div className="dn-break" />
      </motion.div>
    </div>
  );
  const imgContent = (
    <div className="one-half column centered padded">
      <div className="img-block greyed-on-touch">
        <ImageLoader
          width="350"
          imgSrc={props.imgSrc}
          imgAlt={"Mobile"}
          height="300"
        />
      </div>
    </div>
  );
  return (
    <InfoBlockStyle>
      <div className="row">
        {props.reverse ? (
          <React.Fragment>
            {textContent} {imgContent}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {imgContent} {textContent}
          </React.Fragment>
        )}
      </div>
    </InfoBlockStyle>
  );
}

export default InfographicBlock;
