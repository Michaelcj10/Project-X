/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import placeholder from "../../images/hand.png";
import design from "../../images/design-5.png";
import plant from "../../images/plant.png";
import { Row, Col } from "react-grid";
import { Fragment } from "react";
import Slide from "react-reveal/Slide";

const AboutCompanyStyle = styled.div`
  position: relative;
  text-align: left;
  padding: 150px 0px 150px 10%;
  background: #151b1f;

  @media (max-width: 768px) {
    padding: 50px 25px;
  }
`;
const Title = styled.h2`
  font-size: 70px;
  color: #19f9c8;
`;
const Paragraph = styled.p`
  padding: 0px;
  color: #fff;
  margin-top: 25px;
`;
const DesignRightImg = styled.img`
  margin: 25px 0px 0px 0px;
  width: 650px;
  max-width: 100%;
  outline: 3px solid #a9deb2;
  outline-offset: 3px;

  @media (max-width: 768px) {
    margin: 25px 0px 0px -40px;
    outline: none;
  }
`;
const DesignLeftImg = styled.img`
  max-width: 100%;
  width: 500px;
  outline: 3px solid #1ad1e3;
  outline-offset: 3px;
  @media (max-width: 768px) {
    margin-right: -44px;
    margin-top: -8px;
    outline: none;
  }
`;
const DesignLeftImgSm = styled.img`
  margin-top: 75px;
  max-width: 250px;
  outline: 3px solid #ffee7c;
  outline-offset: 3px;

  @media (max-width: 768px) {
    display: none;
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
  background: #19f9c8;
`;

const Hightlight = styled.span`
  color: #19f9c8;
  font-size: 35px;
`;

const RightCol = styled(Col)`
  text-align: right;
`;

const LeftCol = styled(Col)`
  text-align: left;
`;

function CompanyDetails() {
  return (
    <Fragment>
      <AboutCompanyStyle>
        <Row>
          <LeftCol xs={12} md={6}>
            <Slide bottom={true}>
              <Title>Design</Title>
            </Slide>
            <StyledBreak />
            <Paragraph>
              We make custom, dynamic websites for a range of customers from a
              small or personal business to larger enterprises. We aim for a
              personal and communicative experience where customer satisfaction
              is key.
            </Paragraph>
            <SubTitle>
              <Hightlight>Custom</Hightlight> website designs.
            </SubTitle>
            <SubTitle>
              <Hightlight>Mobile</Hightlight> responsive.
            </SubTitle>
            <SubTitle>
              <Hightlight>User</Hightlight> first.
            </SubTitle>
            <DesignRightImg src={placeholder} alt="hands" />
          </LeftCol>

          <RightCol xs={12} md={6}>
            <div>
              <DesignLeftImg src={design} alt="mobile" />
            </div>
            <br />
            <DesignLeftImgSm src={plant} alt="mobile" />
          </RightCol>
        </Row>
      </AboutCompanyStyle>
    </Fragment>
  );
}

export default CompanyDetails;
