/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";

interface Props {
  label: string;
  value: string;
  onChange: (val: string) => void;
  name: string;
}

const InputStyle = styled.div`
  .group {
    position: relative;
    margin-bottom: 45px;
  }
  input {
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-bottom: 1px solid #fff;
    background: transparent;
    color: #fff;
  }
  input:focus {
    outline: none;
  }

  label {
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #fff;
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;
    margin-top: -14px;
  }
  .bar:before,
  .bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #ffa91a;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  .bar:before {
    left: 50%;
  }
  .bar:after {
    right: 50%;
  }

  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 50%;
  }

  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  input:focus ~ .highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }

  @-webkit-keyframes inputHighlighter {
    from {
      background: #ffa91a;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @-moz-keyframes inputHighlighter {
    from {
      background: #ffa91a;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @keyframes inputHighlighter {
    from {
      background: #ffa91a;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`;

function Input(props: Props) {
  return (
    <InputStyle>
      <div className="group">
        <input
          onChange={(e) => {
            props.onChange(e.currentTarget.value);
          }}
          value={props.value}
          type="text"
          name={props.name}
        />
        <span className="highlight" />
        <span className="bar" />
        <label>{props.label}</label>
      </div>
    </InputStyle>
  );
}

export default Input;
