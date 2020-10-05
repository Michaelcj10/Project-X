import * as React from "react";
import styled from "styled-components";
import Input from "../atoms/inputs/input";
import ButtonSecondary from "../atoms/buttons/buttonSecondary";
import green from "../../images/green.png";

const InfographicStyle = styled.div`
  background: #fffcfc;
  padding: 100px 30px;

  .infographic-block {
    margin-top: -100px;
  }

  .twelve {
    text-align: center;
  }

  img {
    max-width: 100%;
  }

  input {
    margin-top: 10px;
  }
`;

const BlobImg = styled.img`
  height: 300px;
  margin-top: -165px;
  max-width: 90%;
`;

function Form() {
  return (
    <InfographicStyle>
      <BlobImg src={green} />
      <div className="infographic-block container-half centered">
        <div className="row">
          <h2>Contact</h2>
          <div className="twelve">
            <Input label="Enter email or phone number" />
            <Input label="Your message here" />
            <ButtonSecondary fullWidth={true} type="submit" text="Submit" />
          </div>
        </div>
      </div>
    </InfographicStyle>
  );
}

export default Form;
