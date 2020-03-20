import * as React from "react";
import styled from "styled-components";
import { Clock } from "styled-icons/fa-regular/Clock";
import { LockAlt } from "styled-icons/boxicons-solid/LockAlt";
import { SearchDollar } from "styled-icons/fa-solid/SearchDollar";
import { motion } from "framer-motion";
import dotsImg from "../../images/landing-4.png";

interface ItemInfo {
  text: string;
  icon: React.ReactNode;
  blurb: string;
}

const TeamStyle = styled.div`
  margin-top: 50px;
  .row {
    width: 90%;
  }

  p:nth-of-type(1) {
    font-weight: bold;
    margin-bottom: 0px;
  }
  p:nth-of-type(2) {
    margin-top: 50px;
  }
  #dots {
    width: 100px;
    margin-bottom: 25px;
  }
  .four {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    padding-top: 50px;
    margin-top: 50px;
  }
  p {
    color: #3f3d56;
  }
`;

const items = [
  {
    text: "Speed",
    icon: <Clock width={75} height={75} color="#3f3d56" />,
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed  augue quam, egestas vitae elementum eu, blandit vitae felis. Maecenas lobortis vehicula risus sit amet elementum."
  } as ItemInfo,
  {
    text: "Security",
    icon: <LockAlt width={75} height={75} color="#3f3d56" />,
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed  augue quam, egestas vitae elementum eu, blandit vitae felis. Maecenas lobortis vehicula risus sit amet elementum."
  } as ItemInfo,
  {
    text: "SEO",
    icon: <SearchDollar width={75} height={75} color="#3f3d56" />,
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed  augue quam, egestas vitae elementum eu, blandit vitae felis. Maecenas lobortis vehicula risus sit amet elementum."
  } as ItemInfo
];

function TeamInfo() {
  return (
    <TeamStyle>
      <div className="row container">
        {items.map(i => {
          return (
            <div className="four columns centered padded" key={i.text}>
              <motion.div
                whileHover={{ scale: 0.9, rotate: 60 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%"
                }}
              >
                {i.icon}
                <br />
              </motion.div>
              <p>{i.text}</p>
              <p>{i.blurb}</p>
              <img id="dots" src={dotsImg} />
            </div>
          );
        })}
      </div>
    </TeamStyle>
  );
}

export default TeamInfo;
