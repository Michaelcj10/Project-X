import * as React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  color: #fff;
  border-radius: 6px;
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  border: 1px solid #fff;
  transition: all 0.5s;
  font-size: 14px;

  &:hover {
    min-width: 175px;
    border-radius: 10px;
    color: #fff;
    border: 1px solid #fff;
  }
`;

interface Props {
  text: string;
}

function Button(props: Props) {
  return <ButtonStyle>{props.text}</ButtonStyle>;
}

export default Button;
