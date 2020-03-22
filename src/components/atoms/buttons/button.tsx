import * as React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  color: #3f3d56;
  border-radius: 6px;
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  border: 1px solid #3ef8f4;
  background: #3ef8f4;
  transition: all 0.5s;
  font-size: 14px;

  &:hover {
    border-radius: 10px;
    border: 1px solid #3ef8f4;
    opacity: 0.7;
  }
`;

interface Props {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
}

function Button(props: Props) {
  return <ButtonStyle type={props.type}>{props.text}</ButtonStyle>;
}

export default Button;
