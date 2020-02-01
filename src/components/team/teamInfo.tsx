import * as React from "react";
import styled from "styled-components";
import { Clock } from "styled-icons/fa-regular/Clock";
import { LockAlt } from "styled-icons/boxicons-solid/LockAlt";
import { SearchDollar } from "styled-icons/fa-solid/SearchDollar";
import { motion } from "framer-motion";

interface ItemInfo {
  text: string;
  icon: React.ReactNode;
  blurb: string;
}

const TeamStyle = styled.div`
  margin-top: 50px;
  padding: 50px 0px;
  .row {
    width: 100%;
  }
  p:nth-of-type(1) {
    font-weight: bold;
    margin-bottom: 0px;
  }
  p:nth-of-type(2) {
    margin-top: 50px;
  }
  .blurb-break {
    width: 60%;
    margin: auto;
    height: 2px;
    background: #e6e6e6;
    transition: all 0.5s;
    margin-bottom: 25px;
  }
  .blurb-break:hover {
    width: 100%;
  }
`;

const items = [
  {
    text: "Speed",
    icon: <Clock width={75} height={75} color="#f2d357" />,
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed  augue quam, egestas vitae elementum eu, blandit vitae felis. Maecenas lobortis vehicula risus sit amet elementum."
  } as ItemInfo,
  {
    text: "Security",
    icon: <LockAlt width={75} height={75} color="#f2d357" />,
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed  augue quam, egestas vitae elementum eu, blandit vitae felis. Maecenas lobortis vehicula risus sit amet elementum."
  } as ItemInfo,
  {
    text: "SEO",
    icon: <SearchDollar width={75} height={75} color="#f2d357" />,
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
              <div className="blurb-break" />
            </div>
          );
        })}
      </div>
    </TeamStyle>
  );
}

export default TeamInfo;
