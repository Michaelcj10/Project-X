/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import pc from "../../images/design-4.png";
import Button from "../atoms/buttons/button";
import { Row, Col } from "react-grid";
import Slide from "react-reveal/Slide";

const SEOCompanyStyle = styled.div`
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
  width: 450px;
  margin: 25px 0px 0px -55px;
  outline: 3px solid #fdcd01;
  outline-offset: 3px;

  @media (max-width: 768px) {
    margin: 25px 0px 0px -40px;
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

const RightColSeo = styled(Col)`
  text-align: right;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const LeftCol = styled(Col)`
  text-align: left;
`;
function Seo() {
  return (
    <SEOCompanyStyle>
      <Row>
        <LeftCol xs={12} md={6}>
          <Slide bottom={true}>
            <Title>SEO</Title>
          </Slide>
          <StyledBreak />
          <Paragraph>
            SEO can help your business get in front of your target audience as
            they're actively searching for information. So having a strong
            online presence will not only help you reach your marketing goals
            but will also enable your target audience to research and buy in a
            way that works for them.
          </Paragraph>
          <SubTitle>
            <Hightlight>More</Hightlight> traffic.
          </SubTitle>
          <SubTitle>
            <Hightlight>Higher</Hightlight> conversion.
          </SubTitle>
          <SubTitle>
            <Hightlight>Brand</Hightlight> awareness.
          </SubTitle>
          <LearnMore>
            <Button
              background="#ffa91a"
              type="button"
              onClick={() => {
                window.scrollTo({ top: 22200, behavior: "smooth" });
              }}
              text="Learn more"
            />
          </LearnMore>
        </LeftCol>

        <RightColSeo xs={12} md={6}>
          <MobileImg src={pc} alt="mobile" />
        </RightColSeo>
      </Row>
    </SEOCompanyStyle>
  );
}

export default Seo;
