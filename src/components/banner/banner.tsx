import * as React from "react";
import styled from "styled-components";
import ButtonSecondary from "../atoms/buttons/buttonSecondary";

const BannerStyle = styled.div`
  width: 100%;
  display: table;
  background-position: left;
  height: 250px;
  text-align: center;

  > div {
    display: table-cell;
    vertical-align: middle;
  }
  .banner {
    background: ghostwhite;
    border: 1px solid #eaeaea;
  }
  div:nth-of-type(1) {
    font-weight: bold;
    font-size: 3.5rem;
  }
  div:nth-of-type(2) {
    font-size: 1.5rem;
    text-transform: capitalize;
    width: 90%;
    margin: auto;
    font-weight: bold;
  }
`;

function Banner() {
  return (
    <div>
      <BannerStyle>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L34.3,74.7C68.6,85,137,107,206,112C274.3,117,343,107,411,117.3C480,128,549,160,617,192C685.7,224,754,256,823,245.3C891.4,235,960,181,1029,170.7C1097.1,160,1166,192,1234,197.3C1302.9,203,1371,181,1406,170.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
        </svg>
        <div className="banner">
          <div>Request a call?</div>
          <div>
            We can call you! Make it quick and easy to get your site up and
            running.
          </div>
          <ButtonSecondary text="Request call" />
        </div>
      </BannerStyle>
    </div>
  );
}

export default Banner;
