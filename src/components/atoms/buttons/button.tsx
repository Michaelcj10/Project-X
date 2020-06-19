import * as React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  color: #3f3d56;
  border-radius: 6px;
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  border: 1px solid #f8f23e;
  background: #f8f23e;
  transition: all 0.5s;
  font-size: 14px;

  &:hover {
    border-radius: 10px;
    border: 1px solid #f8f23e;
    opacity: 0.7;
  }
`;

interface Props {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button(props: Props) {
  return <ButtonStyle onClick={props.onClick} type={props.type}>{props.text}</ButtonStyle>;
}

export default Button;
