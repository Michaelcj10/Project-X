import * as React from "react";
import Button from "../atoms/buttons/button";
import styled from "styled-components";
import Header from "../helper/header";
import TextBreak from "../atoms/break/textBreak";
import logo from "../../images/logo.png";
import bg from "../../images/bg-min.png";
import Slide from "react-reveal/Slide";

const LandingStyle = styled.div`
  border-radius: 4px;
  background: #1c2830;
  position: relative;
  background: url(${bg});
  background-position: initial;
  background-size: cover;
  background-attachment: fixed;
  @media (max-width: 768px) {
    background-position: center;
  }
`;

const Hero = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  height: 100vh;
  width: 100%;
  padding-bottom: 50px;

  p {
    font-size: 1.4em;
    color: #fff;
  }

  h1 {
    font-size: 8rem;
    color: #19f9c8;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 6.5rem;
    }
  }
`;

const Logo = styled.img`
  width: 200px;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 2;
  @media (max-width: 768px) {
    width: 155px;
  }
`;

function Landing() {
  return (
    <LandingStyle>
      <Header />
      <Logo src={logo} alt="logo" />
      <Hero>
        <div className="centered">
          <Slide bottom={true}>
            <h1>Design. Create. </h1>
            <TextBreak />
          </Slide>

          <p>
            We create elegant and creative solutions to your software needs.
          </p>

          <Button
            background="#ffa91a"
            type="button"
            onClick={() => {
              window.scrollTo({ top: 22200, behavior: "smooth" });
            }}
            text="Discover more"
          />
        </div>
      </Hero>
    </LandingStyle>
  );
}

export default Landing;
