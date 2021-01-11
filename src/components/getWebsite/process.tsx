/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import { Row, Col } from "react-grid";
import Slide from "react-reveal/Slide";
import one from "../../images/one.svg";
import two from "../../images/two.svg";
import three from "../../images/three.svg";
import four from "../../images/four.svg";
import Button from "../atoms/buttons/button";

const WhyUseUsStyle = styled.div`
  position: relative;
  text-align: left;
  padding: 150px 10%;
  background: #141529;

  @media (max-width: 768px) {
    padding: 50px 25px;
  }
`;
const Title = styled.h2`
  font-size: 50px;
  color: #fff;
`;
const Paragraph = styled.p`
  padding: 0px 0px 0px 10px;
  color: #fff;
  margin-top: 25px;
  text-align: justify;
  border-left: 4px solid #19f9c8;
`;
const SubTitle = styled.div`
  font-size: 20px;
  color: #fff;
  font-family: Mabry-Bold;
  display: flex;
  align-items: center;
`;

const Hightlight = styled.span`
  color: #19f9c8;
  font-size: 25px;
`;

const LeftCol = styled(Col)`
  text-align: left;
`;

const Icon = styled.img`
  width: 50px;
  margin-right: 25px;
`;
const StyledBreak = styled.div`
  display: block;
  height: 2px;
  width: 100%;
  background: #fff;
  max-width: 600px;
  margin-bottom: 25px;
`;
const ContactButton = styled.div`
  margin-top: 25px;
`;
function Process() {
  return (
    <WhyUseUsStyle>
      <Row>
        <LeftCol xs={12} md={12}>
          <Slide bottom={true}>
            <Title>Our process</Title>
          </Slide>
          <StyledBreak />
        </LeftCol>
      </Row>
      <Row>
        <LeftCol xs={12} md={6}>
          <Slide bottom={true}>
            <SubTitle>
              <Icon src={one} />
              <Hightlight>Initial meeting </Hightlight>
            </SubTitle>
          </Slide>

          <Paragraph>
            We will meet either in person or over Zoom (depending on covid
            restrictions and client preferance) to discuss what you need. During
            this meeting we provide a rough guideline on time and cost.
          </Paragraph>
        </LeftCol>
      </Row>
      <Row>
        <LeftCol xs={12}>
          <Slide bottom={true}>
            <SubTitle>
              <Icon src={two} />
              <Hightlight>Design signoff </Hightlight>
            </SubTitle>
          </Slide>
          <Paragraph>
            We will send you initial wireframe designs. If there is something
            you're not happy with, we change it until you like it!
          </Paragraph>
        </LeftCol>
      </Row>
      <Row>
        <LeftCol xs={12}>
          <Slide bottom={true}>
            <SubTitle>
              <Icon src={three} />
              <Hightlight>Development </Hightlight>
            </SubTitle>
          </Slide>
          <Paragraph>
            We develop the website. This can be as involved for you or not as
            you like. The website can be on a publicly available link so you can
            review it. If something is there you don't like, we change it!
          </Paragraph>
        </LeftCol>
      </Row>
      <Row>
        <LeftCol xs={12}>
          <Slide bottom={true}>
            <SubTitle>
              <Icon src={four} />
              <Hightlight>Your site is live </Hightlight>
            </SubTitle>
          </Slide>
          <Paragraph>
            One you are happy with the site design, speed ETC, we push the site
            live! We monitor it for a few weeks after to make sure everything is
            OK.
          </Paragraph>
        </LeftCol>
      </Row>
      <ContactButton>
        <Button
          background="#19f9c8"
          type="button"
          onClick={() => {
            window.scrollTo({ top: 20000, behavior: "smooth" });
          }}
          text="Get free quote"
        />
      </ContactButton>
    </WhyUseUsStyle>
  );
}

export default Process;
