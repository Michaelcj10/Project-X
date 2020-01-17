import * as React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  color: white !important;
  border-radius: 25px;
  border: none;
  min-width: 155px;
  background-color: #2b2c34;
  transition: all 0.5s;

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
