/** @jsx createElement */
import { createElement } from "react";
import Button from "../atoms/buttons/button";
import styled, { keyframes } from "styled-components";
import TextBreak from "../atoms/break/textBreak";
import bg from "../../images/bg-min.jpg";
import Slide from "react-reveal/Slide";

const LandingStyle = styled.div`
  border-radius: 4px;
  background: #1c2830;
  position: relative;
  background: url(${bg});
  background-position: initial;
  background-size: cover;

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

const Heading = keyframes`
  0% { width: 10%; }
  100% { width: 50%};
`;

const TitleBreak = styled.div`
  height: 4px;
  background: #19f9c8;
  width: 10%;
  transition: all 0.5s;
  margin: auto;
  animation: ${Heading};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;

function Landing() {
  return (
    <LandingStyle>
      <Hero>
        <div className="centered">
          <Slide bottom={true}>
            <TitleBreak />
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
            text="Get free quote"
          />
        </div>
      </Hero>
    </LandingStyle>
  );
}

export default Landing;
