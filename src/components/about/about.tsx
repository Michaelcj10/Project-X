import * as React from "react";
import mobile from "../../images/t.png";
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
  }
`;

function About() {
  return (
    <InfographicStyle>
      <Block className="container">
        <div className="row">
          <div className="twelve">
            <InfographicBlock
              imgSrc={mobile}
              heading={"About us"}
              text={
                "Puca Labs a company based in Dublin who work to provide top class software to customers. Priding ourselves on quality and fast delivery we have already worked with numerous happy customers and treat every customer as the unique individual that person or comapany is to provide a user experience that fits perfectly! We can take on small one page project or larger complex applications and we only ever use up to date technologies and design patterns."
              }
            />
          </div>
        </div>
      </Block>
    </InfographicStyle>
  );
}

export default About;
