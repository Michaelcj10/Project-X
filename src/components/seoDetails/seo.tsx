/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import stock from "../../images/seo.png";
import pc from "../../images/design-4.png";
import Button from "../atoms/buttons/button";
import { Row, Col } from "react-grid";
import Slide from "react-reveal/Slide";

const SEOCompanyStyle = styled.div`
  position: relative;
  text-align: left;
  padding: 150px 0px 150px 8%;
  background: #151b1f;

  @media (max-width: 768px) {
    padding: 50px 25px;
  }
`;
const Title = styled.h2`
  font-size: 70px;
  color: #fc5c5c;
`;
const Paragraph = styled.p`
  padding: 0px;
  color: #e2dbdb;
  margin-top: 25px;
`;
const MobileImg = styled.img`
  max-width: 100%;
  width: 450px;
  margin: 25px 0px 0px -55px;

  @media (max-width: 768px) {
    margin: 25px 0px 0px -40px;
  }
`;
const SubTitle = styled.div`
  font-size: 30px;
  text-align: left;
  color: #fff;
  font-family: Roboto-Bold;
`;

const StyledBreak = styled.div`
  display: block;
  height: 2px;
  width: 100%;
  background: #fc5c5c;
`;

const Hightlight = styled.span`
  color: #fc5c5c;
  font-size: 35px;
`;
const SpeedHightlight = styled.span`
  color: #ffd304;
  font-size: 35px;
`;

const LearnMore = styled.div`
  text-align: left;
  margin: 25px 0px;
`;

const RightCol = styled(Col)`
  text-align: right;
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
const SeoIconsRow = styled(Row)`
  text-align: center;
  margin-top: 50px;
`;
const DesignRightImg = styled.img`
  max-width: 100%;

  @media (max-width: 768px) {
    margin-right: -44px;
    margin-top: -7px;
  }
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
              background="#fc5c5c"
              type="button"
              onClick={() => {
                window.scrollTo({ top: 22200, behavior: "smooth" });
              }}
              text="Learn more"
            />
          </LearnMore>
        </LeftCol>

        <RightColSeo xs={12} md={6}>
          <MobileImg src={stock} alt="mobile" />
        </RightColSeo>
      </Row>

      <SeoIconsRow>
        <LeftCol xs={12} md={6}>
          <SubTitle>
            <SpeedHightlight>Speed</SpeedHightlight>
          </SubTitle>
          <Paragraph>
            Speed is important to improve SEO. Google estimates that after 3.5
            seconds, 50% of your users have given up and closed your site. I
            gaurentee 90% + web score on Googles own speed measurment tool.
          </Paragraph>
        </LeftCol>

        <RightCol xs={12} md={6}>
          <DesignRightImg src={pc} alt="mobile" />
        </RightCol>
      </SeoIconsRow>
    </SEOCompanyStyle>
  );
}

export default Seo;
