import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Card from "../atoms/card";

const TeamStyle = styled.div`
  margin-top: 100px;
`;

function TeamInfo() {
  return (
    <TeamStyle>
      <div className="row">
        <div className="eight columns centered">
          <motion.div
            animate={{ y: 30 }}
            transition={{ ease: "easeOut", duration: 1.4 }}
          >
            <h2>Some stuff</h2>
          </motion.div>
        </div>
        <div className="four columns centered">
          <Card />
        </div>
      </div>
    </TeamStyle>
  );
}

export default TeamInfo;
