/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import loadingAnimation from "../../../images/loading.gif";

const LoaderStyle = styled.div`
  position: fixed;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  background: #191f26;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -15px;
`;

function FullLoader() {
  return (
    <LoaderStyle>
      <img src={loadingAnimation} alt="loader" />
    </LoaderStyle>
  );
}

export default FullLoader;
