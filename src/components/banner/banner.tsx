import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import landingImg from "../../images/landing-6.png";
import mobile from "../../images/illustration-4.svg";
import ButtonSecondary from "../atoms/buttons/buttonSecondary";
import HyperModal from "react-hyper-modal";
import Input from "../atoms/inputs/input";
import Button from "../atoms/buttons/button";

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
    font-size: 1.5rem;
    text-transform: capitalize;
    width: 90%;
    color: #3ef8f4;
    margin: auto;
  }
`;
const ModalStyle = styled.div`
  .fullscreen {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 540px;
    margin: auto;
    margin-top: 20vh;
  }
  .content > * {
    flex-grow: 1;
    min-width: 100%;
    margin-bottom: 25px;
  }
  button {
    width: 100%;
  }
  img {
    min-width: 200px;
    width: 100%;
  }
`;

function Banner() {
  const [showModal, setModalShowing] = useState(false);

  return (
    <div>
      <BannerStyle>
        <div className="banner">
          <div>Request a call?</div>
          <div>
            We can call you! Make it quick and easy to get your site up and
            running.
          </div>
          <ButtonSecondary
            text="Request call"
            onClick={() => {
              setModalShowing(true);
            }}
          />
        </div>
      </BannerStyle>
      <ModalStyle>
        <HyperModal
          isFullscreen
          isOpen={showModal}
          requestClose={() => {
            setModalShowing(false);
          }}
        >
          <div className="content">
            <h2>Let's get you online!</h2>
            <form
              onSubmit={(e: React.FormEvent) => {
                e.preventDefault();
              }}
            >
              <Input label="Enter email or phone number" />
              <br />
              <Button type="submit" text="Submit" />
            </form>
            <img className="greyed-on-touch" src={mobile} />
          </div>
        </HyperModal>
      </ModalStyle>
    </div>
  );
}

export default Banner;
