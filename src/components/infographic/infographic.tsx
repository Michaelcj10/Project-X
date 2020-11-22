import * as React from "react";
import mobileSecond from "../../images/3.svg";
import mobileThird from "../../images/4.svg";
import purple from "../../images/1.svg";
import mobile from "../../images/2.svg";
import green from "../../images/shapes-green.png";
import styled from "styled-components";
import InfographicBlock from "./infoBlock";

const InfographicStyle = styled.div`
  margin-top: -100px;
  background: #fff;

  .infographic-block {
    padding-top: 40px;
    background: #fff;
  }
  .infographic-block svg:nth-of-type(1) {
    transform: rotate(180deg) translateY(2px);
  }
  .infographic-block img {
    width: 350px;
    max-width: 90%;
    margin: 20px auto 25px auto;
  }
  .infographic-block .columns {
    position: relative;
  }
  @media only screen and (max-width: 660px) {
    margin-top: 0px;
  }
`;

const BlobImg = styled.img`
  height: 220px;
  margin: -165px auto 0px auto;
  max-width: 90%;
`;

function Infographic() {
  return (
    <InfographicStyle>
      <div className="infographic-block container">
        <InfographicBlock
          imgSrc={mobile}
          heading={"What I do"}
          text={
            "I make custom, dynamic websites for a range of customers from a small or personal business to larger enterprises. I aim for a personal and communicative experience where customer satisfaction is key."
          }
        />

        <InfographicBlock
          reverse={true}
          imgSrc={mobileSecond}
          heading={"Mobile first"}
          text={
            "Over 80% of the web is now mobile. Optimizing for mobile traffic is so important I make it my ethos!. I gaurantee a great mobile experience. I am not 'works on mobile' i'm mobile first!"
          }
        />

        <InfographicBlock
          imgSrc={mobileThird}
          heading={"Social integration"}
          text={
            "50% of people have a social media count and that rises to 75% of business. I aim to make your website reach as much of the populous as I can by making your site integrate with social media seamlessly."
          }
        />

        <InfographicBlock
          imgSrc={purple}
          reverse={true}
          heading={"Creative designs"}
          text={
            "I make custom, dynamic websites. Design is one of the most important factors in a website that converts and enages. I understand this and I endevour to make all our sites engaging and vibrant!."
          }
        />
      </div>
      <BlobImg src={green} />
    </InfographicStyle>
  );
}

export default Infographic;
