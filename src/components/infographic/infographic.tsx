import * as React from "react";
import mobile from "../../images/illustration-1.svg";
import mobileSecond from "../../images/illustration-2.svg";
import mobileThird from "../../images/illustration-3.svg";
import styled from "styled-components";
import InfographicBlock from "./infoBlock";
import phone from "../../images/landing-1.png";
import { Parallax } from "react-scroll-parallax";

const InfographicStyle = styled.div`
  margin-top: 25px;
  .infographic-block {
    background: #fff;
  }
  .infographic-block svg:nth-of-type(1) {
    transform: rotate(180deg) translateY(2px);
  }
  .infographic-block img {
    width: 450px;
    max-width: 270px;
  }

  .infographic-block .columns {
    position: relative;
  }
  .img-block {
    margin-top: 50px;
    min-height: 250px;
  }
  .twelve {
    margin-bottom: 50px;
  }
  .twelve img {
    max-width: 90%;
  }
`;

function Infographic() {
  return (
    <InfographicStyle>
      <div className="infographic-block container">
        <div className="row">
          <div className="twelve columns centered">
            <Parallax className="custom-class" x={[-15, 0]} tagOuter="figure">
              <h2>Puca Labs</h2>

              <img src={phone} />
            </Parallax>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue
              quam, egestas vitae elementum eu, blandit vitae felis. Maecenas
              lobortis vehicula risus sit amet elementum.
            </p>
          </div>
        </div>

        <Parallax className="custom-class" x={[-20, 0]} tagOuter="figure">
          <InfographicBlock
            imgSrc={mobile}
            heading={"Creative designs"}
            text={
              "We make high quality , mobile responsive and SEO compliant websites. If you want to get full exposure for your business, or you just want a personal site to show off your holiday snaps, or wedding photos, we've got you covered!"
            }
          />
        </Parallax>

        <Parallax className="custom-class" x={[-20, 0]} tagOuter="figure">
          <InfographicBlock
            reverse
            imgSrc={mobileSecond}
            heading={"Mobile responsive"}
            text={
              "We make high quality , mobile responsive and SEO compliant websites. If you want to get full exposure for your business, or you just want a personal site to show off your holiday snaps, or wedding photos, we've got you covered!"
            }
          />
        </Parallax>

        <Parallax className="custom-class" x={[-20, 0]} tagOuter="figure">
          <InfographicBlock
            imgSrc={mobileThird}
            heading={"Social integration"}
            text={
              "We make high quality , mobile responsive and SEO compliant websites. If you want to get full exposure for your business, or you just want a personal site to show off your holiday snaps, or wedding photos, we've got you covered!"
            }
          />
        </Parallax>
      </div>
    </InfographicStyle>
  );
}

export default Infographic;
