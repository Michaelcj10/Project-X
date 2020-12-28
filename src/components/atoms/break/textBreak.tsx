/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";

const BreakStyle = styled.div`
  display: block;
  height: 2px;
  width: 50px;
  background: #ffa91a;
  margin: 5px auto;
`;

function TextBreak() {
  return <BreakStyle />;
}

export default TextBreak;
