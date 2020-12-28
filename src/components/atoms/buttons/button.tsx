/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  transition: all 0.5s;
  border-radius: 65px 56px 71px 21px;
  font-family: Roboto-Bold;
  outline: none;
  font-size: 16px;
  color: #282c34;
  @media only screen and (max-width: 660px) {
    width: 90%;
  }

  &:hover {
    border-radius: 24px 13px 22px 36px;
    color: #282c34;
  }
  &:active,
  &:focus {
    color: #282c34;
  }
`;

interface Props {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  fullWidth?: boolean;
  background: string;
}

function Button(props: Props) {
  return (
    <ButtonStyle
      style={{
        width: props.fullWidth ? "100%" : "",
        background: props.background,
      }}
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </ButtonStyle>
  );
}

export default Button;
