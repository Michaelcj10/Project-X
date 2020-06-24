import * as React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  color: #fff;
  border-radius: 6px;
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  border: 1px solid #4a61dd;
  background: #4a61dd;
  transition: all 0.5s;
  font-size: 14px;

  &:hover {
    border: 1px solid #4a61dd;
    border-radius: 10px;
    opacity: 0.7;
    color: #efefef;
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
