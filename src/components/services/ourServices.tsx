/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import { Row, Col } from "react-grid";
import Slide from "react-reveal/Slide";
import Card from "../atoms/card";
import web from "../../images/web.svg";
import api from "../../images/api.svg";
import logo from "../../images/logo-service.svg";

const WhyUseUsStyle = styled.div`
  position: relative;
  text-align: left;
  padding: 150px 10%;
  background: #030523;

  @media (max-width: 768px) {
    padding: 50px 25px;
  }
`;

const Title = styled.h2`
  font-size: 70px;
  color: #19f9c8;
`;

const LeftCol = styled(Col)`
  text-align: left;
`;

const StyledBreak = styled.div`
  display: block;
  height: 2px;
  width: 100%;
  background: #fff;
  max-width: 600px;
  margin-bottom: 25px;
`;
const ItemRow = styled(Row)`
  justify-content: space-between;
  margin: 0px;
`;

function OurServices() {
  return (
    <WhyUseUsStyle>
      <Row>
        <LeftCol xs={12} md={12}>
          <Slide bottom={true}>
            <Title>Our services</Title>
          </Slide>
          <StyledBreak />
        </LeftCol>
      </Row>
      <Slide bottom={true}>
        <ItemRow>
          <Col xs={12} md={4}>
            <Card
              skills={[
                "UI / UX",
                "Front End Development",
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node",
              ]}
              ribbon="Web"
              title="Web design"
              img={web}
              text="Website design and development from design to deployment"
            />
          </Col>
          <Col xs={12} md={4}>
            <Card
              skills={["Swagger", "MongoDB", "Node", "JavaScript", "Mongoose"]}
              ribbon="API"
              title="API development"
              img={api}
              text="API design and development including full documentation"
            />
          </Col>
          <Col xs={12} md={4}>
            <Card
              skills={["Photoshop", "Zeplin", "UI / UX", "SVG"]}
              ribbon="Design"
              title="Logo design"
              img={logo}
              text="Custom logo design to start bringing your brand to life. No templates used"
            />
          </Col>
        </ItemRow>
      </Slide>
    </WhyUseUsStyle>
  );
}

export default OurServices;
