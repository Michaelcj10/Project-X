import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ShutterSpeed } from "styled-icons/material/ShutterSpeed";
import { Mobile } from "styled-icons/boxicons-regular/Mobile";
import { DocumentText } from "styled-icons/typicons/DocumentText";

interface AboutImgDetails {
  src: React.ReactElement;
  alt: string;
  text: string;
}

const AboutStyle = styled.div`
  .about-block img {
    max-width: 250px;
  }
  .img-block {
    text-align: center;
  }
  .twelve {
    margin: -60px 0 50px 0;
  }
  .description {
    margin: 25px 0;
    font-weight: bold;
  }
  .about-block {
    margin-top: 100px;
  }
`;

const imgDetails: AboutImgDetails[] = [
  {
    alt: "Mobile",
    src: <ShutterSpeed width={50} />,
    text: "Speed"
  },
  {
    alt: "Mobile",
    src: <Mobile width={50} />,
    text: "Mobile Responsivness"
  },
  {
    alt: "Mobile",
    src: <DocumentText width={50} />,
    text: "SEO Compliance"
  }
];

function About() {
  return (
    <AboutStyle>
      <div className="about-block">
        <div className="row">
          <div className="twelve columns centered">
            <motion.div
              animate={{ y: 30 }}
              transition={{ ease: "easeOut", duration: 1.4 }}
            >
              <h2>We give your site</h2>
            </motion.div>
          </div>
        </div>

        <div className="row">
          {imgDetails.map((img: AboutImgDetails) => {
            return (
              <React.Fragment key={`${img.text}`}>
                <motion.div
                  animate={{ y: 30 }}
                  transition={{ ease: "easeOut", duration: 1.6 }}
                >
                  <div className="one-third column centered">
                    {img.src}
                    <div className="description">{img.text}</div>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </AboutStyle>
  );
}

export default About;
