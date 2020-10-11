import * as React from "react";
import styled from "styled-components";
import Input from "../atoms/inputs/input";
import Button from "../atoms/buttons/button";
import green from "../../images/shapes-green.png";
import { motion } from "framer-motion";

const InfographicStyle = styled.div`
  background: #fffcfc;
  padding: 100px 30px 0px;

  .twelve {
    text-align: center;
  }

  img {
    max-width: 100%;
    position: absolute;
  }

  input {
    margin-top: 10px;
  }
`;

const BlobImg = styled.img`
  height: 300px;
  margin-top: -165px;
  max-width: 90%;

  @media only screen and (max-width: 660px) {
    opacity: 0.5;
  }
`;

function Form() {
  return (
    <InfographicStyle>
      <BlobImg src={green} />
      <div className="infographic-block container-half centered">
        <div className="row">
          <h2>Contact</h2>
          <div className="twelve">
            <Input label="Enter email or phone number" />
            <Input label="Your message here" />

            <motion.div whileTap={{ scale: 0.9 }}>
              <Button fullWidth={true} type="submit" text="Submit" />
            </motion.div>
          </div>
        </div>
      </div>
    </InfographicStyle>
  );
}

export default Form;
