/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import stock from "../../images/puca-stock-1.jpg";
import Button from "../atoms/buttons/button";
import { Row, Col } from "react-grid";
import Slide from "react-reveal/Slide";

const AboutCompanyStyle = styled.div`
  position: relative;
  text-align: left;
  padding: 150px 0px 150px 10%;
  background: #202133;

  @media (max-width: 768px) {
    padding: 50px 25px;
  }
`;
const Title = styled.h2`
  font-size: 70px;
  color: #ffa91a;
`;
const Paragraph = styled.p`
  padding: 0px;
  color: #fff;
  margin-top: 25px;
`;
const MobileImg = styled.img`
  max-width: 100%;
  width: 600px;
  outline: 3px solid #f2cd5a;
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
  background: #ffa91a;
`;

const Hightlight = styled.span`
  color: #ffa91a;
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

function AboutCompany() {
  return (
    <AboutCompanyStyle>
      <Row>
        <LeftCol xs={12} md={6}>
          <Slide bottom={true}>
            <Title>About us </Title>
          </Slide>
          <StyledBreak />
          <Paragraph>
            We make custom, dynamic software for a range of customers from a
            small or personal business to larger enterprises. We aim for a
            personal and communicative experience where customer satisfaction is
            key. All of our sites are SEO compliant as well as lightning fast.
            We aim to make getting your business or personal site online a
            painless and fast process. The sooner you're business is online the
            faster it will grow.
          </Paragraph>
          <SubTitle>
            <Hightlight>5</Hightlight> years experience.
          </SubTitle>
          <SubTitle>
            <Hightlight>Prices from</Hightlight> €250.
          </SubTitle>
          <LearnMore>
            <Button
              background="#ffa91a"
              type="button"
              onClick={() => {
                window.scrollTo({ top: 22200, behavior: "smooth" });
              }}
              text="Contact us"
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

export default AboutCompany;
