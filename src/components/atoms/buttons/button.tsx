import * as React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  border-radius: 6px;
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  transition: all 0.5s;
  background: rgb(40 44 52);
  font-size: 14px;
  color: #fff;

  @media only screen and (max-width: 660px) {
    width: 90%;
  }

  &:hover {
    color: #fff;
    opacity: 0.8;
  }
`;

interface Props {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button(props: Props) {
  return (
    <ButtonStyle onClick={props.onClick} type={props.type}>
      {props.text}
    </ButtonStyle>
  );
}

export default Button;
