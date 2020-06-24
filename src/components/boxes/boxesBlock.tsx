import * as React from "react";
import styled from "styled-components";
import tile from "../../images/tile-6.svg";
import secure from "../../images/tile-5.svg";
import blocks from "../../images/tile-4.svg";

interface ItemInfo {
  text: string;
  icon: React.ReactNode;
  blurb: string;
}

const BoxesStyle = styled.div`
  margin-top: 150px;
  .row {
    width: 90%;
  }

  p:nth-of-type(1) {
    font-weight: bold;
    margin-bottom: 0px;
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
  }
  p:nth-of-type(2) {
    margin-top: 10px;
  }
  #dots {
    width: 100px;
    margin-bottom: 25px;
  }
  .four {
    padding-top: 50px;
    margin-top: 50px;
    min-height:325px;
    border-bottom: 2px solid #4a61dd;
    background:#20242f;
    position:relative;
    overflow:hidden;
  }
  .ribbon{
    position: absolute;
    width: 100px;
    height: 100px;
    top: -51px;
    right: -57px;
    transform: rotate(44deg);
    background: rgb(35, 41, 58);
  }
  img{
    width: 55px;
    padding: 0px;
  }
`;

const items = [
  {
    text: "Speed",
    icon: <img src={tile}/>,
    blurb:
      "Google estimates that after 3.5 seconds, 50% of your users have given up and closed your site. We gaurentee 90% + web score on Googles own speed measurment tool."
  } as ItemInfo,
  {
    text: "Security",
    icon: <img src={secure}/>,
    blurb:
      "Web security is one of our primary goals. Our websites are protected with SSL and all sites are gaurenteed to be secure and safe for your users. We pride ourselves on it."
  } as ItemInfo,
  {
    text: "SEO",
    icon: <img src={blocks}/>,
    blurb:
      "We make high quality , mobile responsive and SEO compliant websites. If you want to get full exposure for your business, count on us!"
  } as ItemInfo
];

function Boxes() {
  return (
    <BoxesStyle>
      <div className="row container">
        {items.map(i => {
          return (
            <div className="four columns padded" key={i.text}>
              <div className="ribbon"  />
              <p>{i.text}</p>
              <br />
              {i.icon}
              <p>{i.blurb}</p>
            </div>
          );
        })}
      </div>
    </BoxesStyle>
  );
}

export default Boxes;
