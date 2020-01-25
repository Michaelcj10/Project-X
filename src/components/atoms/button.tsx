import * as React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  color: #2b2c34;
  border-radius: 6px;
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  background-color: #62fdfb;
  transition: all 0.5s;
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
