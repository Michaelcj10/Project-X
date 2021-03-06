/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import { Row, Col } from "react-grid";
import Slide from "react-reveal/Slide";
import hosting from "../../images/hosting.svg";
import custom from "../../images/custom.svg";
import dollar from "../../images/dollar.svg";

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
  font-size: 70px;
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
`;

const Hightlight = styled.span`
  color: #19f9c8;
  font-size: 25px;
  margin-top: 25px;
`;

const LeftCol = styled(Col)`
  text-align: left;
`;

const Icon = styled.img`
  width: 50px;
`;
const StyledBreak = styled.div`
  display: block;
  height: 2px;
  width: 100%;
  background: #fff;
  max-width: 600px;
  margin-bottom: 25px;
`;
function WhyUseUs() {
  return (
    <WhyUseUsStyle>
      <Row>
        <LeftCol xs={12} md={12}>
          <Slide bottom={true}>
            <Title>Why us? </Title>
          </Slide>
          <StyledBreak />
        </LeftCol>
      </Row>
      <Row>
        <LeftCol xs={12} md={4}>
          <Icon src={hosting} alt="hosting" />

          <Slide bottom={true}>
            <SubTitle>
              <Hightlight>Free hosting</Hightlight>
            </SubTitle>
          </Slide>

          <Paragraph>
            Take the hassle out of domain hosting! We offer custom domain
            hosting along with your website package completely free!
          </Paragraph>
        </LeftCol>
        <LeftCol xs={12} md={4}>
          <Icon src={custom} alt="hosting" />

          <Slide bottom={true}>
            <SubTitle>
              <Hightlight>Custom website</Hightlight>
            </SubTitle>
          </Slide>
          <Paragraph>
            We gaurantee a custom , branded website exactly to your
            requirements. No templates or themes. We will bring your brand to
            life with initial conversations right to the final product.
          </Paragraph>
        </LeftCol>
        <LeftCol xs={12} md={4}>
          <Icon src={dollar} alt="hosting" />

          <Slide bottom={true}>
            <SubTitle>
              <Hightlight>Affordable</Hightlight>
            </SubTitle>
          </Slide>
          <Paragraph>
            Our aim is to provide affordable websites. We won't be beaten on
            price and if you receive a lower quote on another Irish site we will
            beat it!
          </Paragraph>
        </LeftCol>
      </Row>
    </WhyUseUsStyle>
  );
}

export default WhyUseUs;
