/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import loader from "../../images/loader.gif";

const BannerStyle = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 999;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #202133;

  img {
    width: 60px;
  }
`;

function FullLoader() {
  return (
    <BannerStyle>
      <img src={loader} alt="loader" />
    </BannerStyle>
  );
}

export default FullLoader;
