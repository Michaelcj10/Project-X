import * as React from "react";
import styled from "styled-components";
import tile from "../../images/tortoise.png";
import secure from "../../images/lock.png";
import blocks from "../../images/tele.png";

interface ItemInfo {
  text: string;
  icon: React.ReactNode;
  blurb: string;
  border: string;
}

const BoxesStyle = styled.div`
  .row {
    text-align: center;
    padding: 100px 25px;
    background: #fff;
  }

  p:nth-of-type(1) {
    font-weight: bold;
    margin-bottom: 0px;
    font-size: 1.6em;
  }
  p:nth-of-type(2) {
    margin-top: 10px;
    font-size: 16px;
  }
  #dots {
    width: 100px;
    margin-bottom: 25px;
  }
  img {
    width: 55px;
    height: 65px;
    padding: 0px;
  }
`;

const items = [
  {
    text: "Speed",
    icon: <img src={tile} />,
    blurb:
      "Google estimates that after 3.5 seconds, 50% of your users have given up and closed your site. We gaurentee 90% + web score on Googles own speed measurment tool.",
  } as ItemInfo,
  {
    text: "Security",
    icon: <img src={secure} />,
    blurb:
      "Web security is one of our primary goals. Our websites are protected with SSL and all sites are gaurenteed to be secure and safe for your users. We pride ourselves on it.",
  } as ItemInfo,
  {
    text: "SEO",
    icon: <img src={blocks} />,
    blurb:
      "We make high quality , mobile responsive and SEO compliant websites. If you want to get full exposure for your business, count on us!",
  } as ItemInfo,
];

function Boxes() {
  return (
    <BoxesStyle>
      <div className="row">
        {items.map((i) => {
          return (
            <div className="four columns padded" key={i.text}>
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
