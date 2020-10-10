import * as React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  background: #a0fc69;
  transition: all 0.5s;
  font-size: 16px;
  border-radius: 40px 31px 48px 51px;
  font-family: Roboto-Bold;
  &:hover {
    border-radius: 24px 13px 22px 36px;
  }

  @media only screen and (max-width: 660px) {
    width: 90%;
  }
`;

interface Props {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  fullWidth?: boolean;
}

function ButtonSecondary(props: Props) {
  return (
    <ButtonStyle
      style={{ width: props.fullWidth ? "100%" : "auto" }}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </ButtonStyle>
  );
}

export default ButtonSecondary;
