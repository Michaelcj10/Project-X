/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import tick from "../../images/tick.svg";

const ToastStyle = styled.div`
  width: 100%;
  max-width: 300px;
  height: 50px;
  background: #4c8bf5;
  color: white;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  box-shadow: #3a3a3a 0px 2px 20px 0px, rgba(21, 25, 68, 0.06) 0px 3px 12px -8px,
    rgba(21, 25, 68, 0.03) 0px 1px 6px -2px;
  border-radius: 0px 0px 19px 19px;
  -webkit-animation: toastAnimate 0.3s ease;
  -moz-animation: toastAnimate 0.3s ease;
  animation: toastAnimate 0.3s ease;
  transform: translateY(-24px);
  animation-fill-mode: forwards;

  @-webkit-keyframes toastAnimate {
    from {
      transform: translateY(-24px);
    }
    to {
      transform: translateY(0px);
    }
  }
  @-moz-keyframes toastAnimate {
    from {
      transform: translateY(-24px);
    }
    to {
      transform: translateY(0px);
    }
  }
  @keyframes toastAnimate {
    from {
      transform: translateY(-24px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;

const Tick = styled.img`
  position: relative;
  width: 20px;
  margin-right: 15px;
`;

interface Props {
  text: string;
}

function Toast(props: Props) {
  return (
    <ToastStyle id="toast">
      <Tick src={tick} alt="tick" />
      <div>{props.text}</div>
    </ToastStyle>
  );
}

export default Toast;
