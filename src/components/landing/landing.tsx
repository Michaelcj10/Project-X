import * as React from "react";
import Button from "../atoms/buttons/button";
import styled from "styled-components";
import Header from "../helper/header";
import TextBreak from "../atoms/break/textBreak";
import logo from "../../images/logo.png";
import { Row, Col } from "react-grid";
import Slide from "react-reveal/Slide";

const LandingStyle = styled.div`
  border-radius: 4px;
  background: #1c2830;
  position: relative;
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

  .row {
    display: table-cell;
    vertical-align: middle;
  }

  .columns {
    position: relative;
  }

  .twelve {
    min-height: 300px;
    margin-top: -70px;
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
  width: auto;
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
        <Row>
          <Col xs={12}>
            <div>
              <div className="centered">
                <Slide bottom={true}>
                  <h1>Design. Create.</h1>
                  <TextBreak />
                </Slide>

                <p>
                  We create elegant and creative solutions to your software
                  needs.
                </p>

                <Button
                  type="button"
                  onClick={() => {
                    window.scrollTo({ top: 22200, behavior: "smooth" });
                  }}
                  text="Discover more"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Hero>
    </LandingStyle>
  );
}

export default Landing;
