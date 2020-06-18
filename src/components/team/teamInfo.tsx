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
    box-shadow: 0px 18px 39.1px 6.9px rgba(223, 223, 223, 0.34);
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
      "Google estimates that after 3.5 seconds, 50% of your users have given up and closed your site. We gaurentee 90% + web score on Googles own speed measurment tool."
  } as ItemInfo,
  {
    text: "Security",
    icon: <LockAlt width={75} height={75} color="#3f3d56" />,
    blurb:
      "Web security is one of our primary goals. Our websites are protected with SSL and all sites are gaurenteed to be secure and safe for your users. We pride ourselves on it."
  } as ItemInfo,
  {
    text: "SEO",
    icon: <SearchDollar width={75} height={75} color="#3f3d56" />,
    blurb:
      "We make high quality , mobile responsive and SEO compliant websites. If you want to get full exposure for your business, count on us!"
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
            </div>
          );
        })}
      </div>
    </TeamStyle>
  );
}

export default TeamInfo;
