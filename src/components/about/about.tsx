import * as React from "react";
import styled from "styled-components";
import landingImg from "../../images/blue.png";

const InfographicStyle = styled.div`
  background: #fff;
  padding-top: 50px;
`;

const Block = styled.div`
  padding: 50px 0px 100px 0px;
  background: #fff;
  background-image: url(${landingImg});
  background-repeat: no-repeat;

  .twelve {
    text-align: center;
    border-radius: 40px 31px 48px 51px;
    background: #ffffffeb;
    padding-top: 50px;
  }
  .dn-break {
    width: 35%;
    margin: auto;
    height: 4px;
    background: rgb(255 0 127);
  }
`;

const SubTitle = styled.p`
  text-align: center;
  max-width: 90%;
  margin: auto;
  margin-bottom: 2.5rem;
  padding: 50px;
`;

function About() {
  return (
    <InfographicStyle>
      <Block className="container">
        <div className="row">
          <div className="twelve">
            <h2>About us</h2>

            <SubTitle>
              <strong>Puca Labs</strong> a company based in Dublin who work to
              provide top class software to customers. Priding ourselves on
              quality and fast delivery we have already worked with numerous
              happy customers and treat every customer as the unique individual
              that person or comapany is to provide a user experience that fits
              perfectly! We can take on small one page project or larger complex
              applications and we only ever use up to date technologies and
              design patterns.
            </SubTitle>
            <div className="dn-break" />
          </div>
        </div>
      </Block>
    </InfographicStyle>
  );
}

export default About;
