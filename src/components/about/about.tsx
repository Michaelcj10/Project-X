import * as React from "react";
import styled from "styled-components";

const InfographicStyle = styled.div`
  background: #fff;

  .infographic-block {
    padding: 50px 0px;
    background: #fff;
  }

  .twelve {
    text-align: center;
  }
`;

const SubTitle = styled.p`
  text-align: center;
  max-width: 90%;
  margin: auto;
`;

function About() {
  return (
    <InfographicStyle>
      <div className="infographic-block container">
        <div className="row">
          <div className="twelve">
            <h2>About us</h2>
            <SubTitle>
              We are a company based in Dublin who work to provide top class
              software to customers. Priding ourselves on quality and fast
              delivery we have already worked with numerous happy customers and
              treat every customer as the unique individual that person or
              comapany is to provide a user experience that fits perfectly! We
              can take on small one page project or larger complex applications
              and we only ever use up to date technologies and design patterns.
            </SubTitle>
          </div>
        </div>
      </div>
    </InfographicStyle>
  );
}

export default About;
