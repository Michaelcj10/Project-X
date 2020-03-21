import * as React from "react";
import styled from "styled-components";

//TODO remove important and figure why hover styles not workign
const ButtonStyle = styled.button`
  border-radius: 6px;
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  background: transparent;
  border: 1px solid white;
  color: #fff;
  transition: all 0.5s;
  font-size: 14px;

  &:hover {
    min-width: 205px;
    border-radius: 10px;
    color: #3ef8f4;
    border: 1px solid #3ef8f4;
  }
`;

interface Props {
  text: string;
}

function ButtonSecondary(props: Props) {
  return <ButtonStyle>{props.text}</ButtonStyle>;
}

export default ButtonSecondary;
