import * as React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  border-radius: 6px;
  min-width: 150px;
  height: 50px;
  border: none;
  min-width: 155px;
  background: rgb(159 251 104);
  transition: all 0.5s;
  font-size: 14px;

  &:hover {
    border-radius: 10px;
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
