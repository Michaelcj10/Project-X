import * as React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  color: #2b2c34;
  border-radius: 6px;
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  background-color: #ffd248;
  transition: all 0.5s;
  background: linear-gradient(to right, rgb(255, 210, 72), rgb(236, 236, 236));
  font-size: 14px;

  &:hover {
    min-width: 175px;
    border-radius: 10px;
  }
`;

interface Props {
  text: string;
}

function Button(props: Props) {
  return <ButtonStyle>{props.text}</ButtonStyle>;
}

export default Button;
