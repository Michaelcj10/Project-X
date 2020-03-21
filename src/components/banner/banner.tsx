import * as React from "react";
import styled from "styled-components";
import landingImg from "../../images/landing-6.png";
import ButtonSecondary from "../atoms/buttonSecondary";

const BannerStyle = styled.div`
  margin-top: 100px;
  width: 100%;
  display: table;
  background-image: url(${landingImg});
  background-position: left;
  height: 250px;
  text-align: center;

  > div {
    display: table-cell;
    vertical-align: middle;
    color: #fff;
  }
  .banner {
    background: rgba(65, 34, 142, 0.9);
  }
  div:nth-of-type(1) {
    font-weight: bold;
    font-size: 3.5rem;
    text-transform: uppercase;
  }
  div:nth-of-type(2) {
    font-weight: normal;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`;

function Banner() {
  return (
    <BannerStyle>
      <div className="banner">
        <div>Request a call?</div>
        <div>
          We can call you! Make it quick and easy to get your site up and
          running.
        </div>
        <ButtonSecondary text="Request call" />
      </div>
    </BannerStyle>
  );
}

export default Banner;
