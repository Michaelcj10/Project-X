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
  background: string;
}

const BoxesStyle = styled.div`
  .row {
    text-align: center;
    padding: 100px 25px 0px;
    background: #fff;
  }

  p:nth-of-type(1) {
    font-family: Roboto-Bold;
    margin-bottom: 0px;
    font-size: 1.6em;
  }
  p:nth-of-type(2) {
    margin-top: 10px;
    font-size: 16px;
    padding: 15px;
    transition: all 0.5s;
    font-family: Roboto;
    opacity: 0.75;
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
  .four {
    border-radius: 40px 31px 48px 51px;
    background: #fbfbfb;
    padding: 15px;
    min-height: 360px;
  }

  @media only screen and (max-width: 660px) {
    .four {
      border-radius: 0px;
    }
  }
`;

const items = [
  {
    text: "Speed",
    icon: <img src={tile} />,
    blurb:
      "Google estimates that after 3.5 seconds, 50% of your users have given up and closed your site. I gaurentee 90% + web score on Googles own speed measurment tool.",
  } as ItemInfo,
  {
    text: "Security",
    icon: <img src={secure} />,
    blurb:
      "Web security is one of my primary goals. My websites are protected with SSL and all sites are gaurenteed to be secure and safe for your users. I pride myself on it.",
  } as ItemInfo,
  {
    text: "SEO",
    icon: <img src={blocks} />,
    blurb:
      "I make high quality , mobile responsive and SEO compliant websites. If you want to get full exposure for your business, count on it!",
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
