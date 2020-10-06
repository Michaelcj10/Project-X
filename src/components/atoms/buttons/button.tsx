import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonStyle = styled.button`
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  transition: all 0.5s;
  border-radius: 40px 31px 48px 51px;
  background: rgb(195 59 217);
  font-size: 16px;
  color: #fff;

  @media only screen and (max-width: 660px) {
    width: 90%;
  }

  &:hover {
    color: #fff;
    border-radius: 24px 13px 22px 36px;
  }
  &:active,
  &:focus {
    color: #fff;
  }
`;

interface Props {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button(props: Props) {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      animate={{ y: 80 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
    >
      <ButtonStyle onClick={props.onClick} type={props.type}>
        {props.text}
      </ButtonStyle>
    </motion.div>
  );
}

export default Button;
