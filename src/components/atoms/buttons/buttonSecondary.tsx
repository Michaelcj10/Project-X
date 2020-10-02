import * as React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  background: #a0fc69;
  transition: all 0.5s;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 660px) {
    width: 90%;
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
