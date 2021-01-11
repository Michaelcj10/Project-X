/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import stock from "../../images/design-9.jpg";
import Button from "../atoms/buttons/button";
import { Row, Col } from "react-grid";
import Slide from "react-reveal/Slide";

const AboutCompanyStyle = styled.div`
  position: relative;
  text-align: left;
  padding: 250px 0px 150px 10%;
  background: #202133;

  @media (max-width: 768px) {
    padding: 150px 25px;
  }
`;
const Title = styled.h2`
  font-size: 50px;
  color: #fff0a2;
`;
const Paragraph = styled.p`
  padding: 0px;
  color: #fff;
  margin-top: 25px;
`;
const MobileImg = styled.img`
  max-width: 100%;
  width: 600px;
  outline: 3px solid #fff0a2;
  outline-offset: 3px;

  @media (max-width: 768px) {
    margin-right: -44px;
    outline: none;
  }
`;
const SubTitle = styled.div`
  font-size: 30px;
  text-align: left;
  color: #fff;
  font-family: Mabry-Bold;
`;

const StyledBreak = styled.div`
  display: block;
  height: 2px;
  width: 100%;
  background: #fff0a2;
`;

const Hightlight = styled.span`
  color: #fff0a2;
  font-size: 35px;
`;

const LearnMore = styled.div`
  text-align: left;
  margin: 25px 0px;
`;

const RightCol = styled(Col)`
  text-align: right;
`;

const LeftCol = styled(Col)`
  text-align: left;
`;

function AboutSite() {
  return (
    <AboutCompanyStyle>
      <Row>
        <LeftCol xs={12} md={6}>
          <Slide bottom={true}>
            <Title>Get a website</Title>
          </Slide>
          <StyledBreak />
          <Paragraph>
            We make custom, branded websites for all size customers, enterprise
            or personal. You will get a fully functional website deployed on the
            web on completion of the work. A custom domain name such as
            www.yoursite.com is provided free of charge.
          </Paragraph>
          <SubTitle>
            <Hightlight>Lightning</Hightlight> fast.
          </SubTitle>
          <SubTitle>
            <Hightlight>SEO</Hightlight> best practices.
          </SubTitle>
          <SubTitle>
            <Hightlight>Latest</Hightlight> technologies.
          </SubTitle>
          <SubTitle>
            <Hightlight>Prices from</Hightlight> €250.
          </SubTitle>
          <LearnMore>
            <Button
              background="#fff0a2"
              type="button"
              onClick={() => {
                window.scrollTo({ top: 1100, behavior: "smooth" });
              }}
              text="What's the process?"
            />
          </LearnMore>
        </LeftCol>

        <RightCol xs={12} md={6}>
          <MobileImg src={stock} alt="mobile" />
        </RightCol>
      </Row>
    </AboutCompanyStyle>
  );
}

export default AboutSite;
