import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonStyle = styled.button`
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  transition: all 0.5s;
  border-radius: 65px 56px 71px 21px;
  font-family: Roboto-Bold;
  background: rgb(195 59 217);
  font-size: 16px;
  color: #fff;
  @media only screen and (max-width: 660px) {
    width: 90%;
  }

  &:hover {
    border-radius: 24px 13px 22px 36px;
    color: #fff;
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
  fullWidth?: boolean;
}

function Button(props: Props) {
  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <ButtonStyle
        style={{ width: props.fullWidth ? "100%" : "" }}
        onClick={props.onClick}
        type={props.type}
      >
        {props.text}
      </ButtonStyle>
    </motion.div>
  );
}

export default Button;
