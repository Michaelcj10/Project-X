import * as React from "react";
import styled from "styled-components";

// TODO remove important and figure why hover styles not workign
const ButtonStyle = styled.button`
  border-radius: 6px;
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  background: transparent;
  border: 1px solid #3f3d56;
  color: #3f3d56;
  transition: all 0.5s;
  font-size: 14px;

  &:hover {
    min-width: 205px;
    border-radius: 10px;
    opacity:0.8;
  }
`;

interface Props {
  text: string;
  onClick: () => void;
}

function ButtonSecondary(props: Props) {
  return <ButtonStyle onClick={props.onClick}>{props.text}</ButtonStyle>;
}

export default ButtonSecondary;