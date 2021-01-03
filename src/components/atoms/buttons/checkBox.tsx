/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";

const CheckStyle = styled.div`
  .check-block {
    display: flex;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    align-items: center;
  }

  .check-block input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  .check-block:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .check-block input:checked ~ .checkmark {
    background-color: #19f9c8;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .check-block input:checked ~ .checkmark:after {
    display: block;
  }

  .check-block .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

interface Props {
  text: string;
  onClick: () => void;
  checked: boolean;
}

function CheckBox(props: Props) {
  return (
    <CheckStyle>
      <label
        className="check-block"
        onClick={(e: React.MouseEvent<HTMLLabelElement>) => {
          e.stopPropagation();
          e.preventDefault();
          props.onClick();
        }}
      >
        <span>{props.text}</span>
        <input
          name="optin"
          type="checkbox"
          onChange={() => {
            return;
          }}
          checked={props.checked}
        />
        <span className="checkmark" />
      </label>
    </CheckStyle>
  );
}

export default CheckBox;
