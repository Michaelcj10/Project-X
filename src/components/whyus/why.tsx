import * as React from "react";
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
  padding: 0px;
  color: #fff;
  margin-top: 25px;
  text-align: justify;
`;
const SubTitle = styled.div`
  font-size: 20px;
  color: #fff;
  font-family: Roboto-Bold;
`;

const Hightlight = styled.span`
  color: #fff;
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

          <SubTitle>
            <Hightlight>Free hosting</Hightlight>
          </SubTitle>
          <Paragraph>
            We make custom, dynamic websites for a range of customers from a
            small or personal business to larger enterprises. We aim for a
            personal and communicative experience where customer satisfaction is
            key.
          </Paragraph>
        </LeftCol>
        <LeftCol xs={12} md={4}>
          <Icon src={custom} alt="hosting" />

          <SubTitle>
            <Hightlight>Custom website</Hightlight>
          </SubTitle>
          <Paragraph>
            We make custom, dynamic websites for a range of customers from a
            small or personal business to larger enterprises. We aim for a
            personal and communicative experience where customer satisfaction is
            key.
          </Paragraph>
        </LeftCol>
        <LeftCol xs={12} md={4}>
          <Icon src={dollar} alt="hosting" />

          <SubTitle>
            <Hightlight>Affordable</Hightlight>
          </SubTitle>
          <Paragraph>
            We make custom, dynamic websites for a range of customers from a
            small or personal business to larger enterprises. We aim for a
            personal and communicative experience where customer satisfaction is
            key.
          </Paragraph>
        </LeftCol>
      </Row>
    </WhyUseUsStyle>
  );
}

export default WhyUseUs;
