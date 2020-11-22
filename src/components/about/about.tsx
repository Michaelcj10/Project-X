import * as React from "react";
import bio from "../../images/bio.png";
import styled from "styled-components";
import InfographicBlock from "../infographic/infoBlock";

const InfographicStyle = styled.div`
  background: #fff;
`;

const Block = styled.div`
  padding: 50px 0px 0px 0px;

  .twelve {
    text-align: center;
    padding-bottom: 100px;
    background: rgba(255, 255, 255, 0.85);
  }
  img {
    max-width: 90%;
    margin: auto;
    margin-bottom: 25px;
    border-radius: 50%;
  }
`;

function About() {
  return (
    <InfographicStyle>
      <Block className="container">
        <div className="row">
          <div className="twelve">
            <InfographicBlock
              imgSrc={bio}
              heading={"About me"}
              text={
                "I am a front end developer based in Dublin working full time for Ding. I also work to provide top class software to customers. Priding myself on quality and fast delivery I have already worked with numerous happy customers and treat every customer as the unique individual that person or comapany is to provide a user experience that fits perfectly! I can take on small one page project or larger complex applications and I only ever use up to date technologies and design patterns."
              }
            />
          </div>
        </div>
      </Block>
    </InfographicStyle>
  );
}

export default About;
