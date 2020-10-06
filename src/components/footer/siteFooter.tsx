import * as React from "react";
import styled from "styled-components";
import fb from "../../images/fb.png";
import ln from "../../images/ln.png";

const InfographicStyle = styled.div`
  margin: auto;
  text-align: center;
  background: #fffcfc;
  padding-top: 100px;
  width: 100%;
  position: relative;
`;

const Middle = styled.div`
  max-width: 90%;
  margin: auto;
  background: rgba(255, 255, 255, 0.7);
  padding: 100px 50px;
  border-radius: 38px 33px 0px 0px;
  box-shadow: 0px 2px 1px -11px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const SocialIcon = styled.img`
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

function SiteFooter() {
  return (
    <InfographicStyle>
      <Middle>
        <div className="row">
          <div className="twelve columns centered">
            <h2>Follow us</h2>
            <SocialIcon style={{ width: "60px" }} src={fb} alt="facebook" />
            <SocialIcon style={{ width: "80px" }} src={ln} alt="linkedin" />
          </div>
        </div>
      </Middle>
    </InfographicStyle>
  );
}

export default SiteFooter;
