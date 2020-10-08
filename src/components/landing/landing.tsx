import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../atoms/buttons/button";
import landingImg from "../../images/shapes-green.png";
import splat from "../../images/splat.svg";
import logo from "../../images/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingStyle = styled.div`
  background: #fff;
  border-radius: 4px;
`;

const Hero = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  height: 100vh;
  width: 100%;
  background-image: url(${landingImg});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  p {
    font-weight: bold;
    font-size: 1em;
    color: #282c34;
  }

  .row {
    display: table-cell;
    vertical-align: middle;
  }

  .columns {
    position: relative;
  }

  img {
    width: 300px;
    max-width: 90%;
  }
  .twelve {
    min-height: 300px;
    margin-top: -70px;
  }

  h1 {
    font-size: 9rem;
    color: #282c34;
  }
`;

const Splat = styled.img`
  position: absolute;
  right: 0px;
  top: -20;
  opacity: 0.35;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 25px;
  position: fixed;
  top: 25px;
  z-index: 99;
  border-radius: 50%;
  left: 25px;
  box-shadow: 0 6px 10px 0 rgba(21, 25, 68, 0.12),
    0 8px 16px -12px rgba(21, 25, 68, 0.05),
    0 4px 8px -3px rgba(21, 25, 68, 0.02);
  padding: 5px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

const SharedLink = styled(Link)`
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s;
  border-radius: 40px 31px 48px 51px;
  font-size: 16px;
  padding: 8px;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

const Blog = styled.div`
  margin-right: 8px;
  border-radius: 24px 13px 22px 36px;
  background: rgb(195 59 217);
  color: #fff;
  color: #fff;
  transition: all 0.5s;
  a {
    color: #fff;
  }
  &:hover {
    background: rgb(255 0 127);
    color: #fff;
  }
`;
const Policy = styled.div`
  background: #32eb91;
  border-radius: 24px 13px 22px 36px;
  color: #fff;
  transition: all 0.5s;
  a {
    color: #fff;
  }
  &:hover {
    background: #007fff;

    a {
      color: #fff;
    }
  }
`;
const HeaderLinks = styled.div`
  display: flex;
  position: absolute;
  top: 15px;
  right: 20px;
  transition: all 0.5s;
  padding-bottom: 5px;
  border-radius: 24px 13px 22px 36px;

  &:hover {
    border-bottom: 2px solid #a0fc69;
  }
`;
function Landing() {
  const [underline, setUnderline] = useState<string>("#fff100");

  return (
    <LandingStyle>
      <motion.div
        animate={{ y: 100 }}
        transition={{ ease: "easeOut", duration: 2.5 }}
      >
        <Splat src={splat} />
      </motion.div>

      <Logo
        src={logo}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
      <Hero>
        <HeaderLinks style={{ borderBottom: `2px solid ${underline}` }}>
          <motion.div
            whileTap={{ scale: 0.8 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Blog
              onMouseEnter={() => {
                setUnderline("rgb(255 0 127)");
              }}
              onMouseLeave={() => {
                setUnderline("#00ffff");
              }}
            >
              <SharedLink to="/blog">Blog</SharedLink>
            </Blog>
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.8 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Policy
              onMouseEnter={() => {
                setUnderline("#007fff");
              }}
              onMouseLeave={() => {
                setUnderline("#00ffff");
              }}
            >
              <SharedLink to="/policy">Policy</SharedLink>
            </Policy>
          </motion.div>
        </HeaderLinks>

        <div className="row">
          <div className="twelve columns centered">
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <h1>Púca Labs</h1>
            </motion.div>
            <motion.div
              animate={{ y: 80 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <p>
                We aim to create elegant and creative solutions to your software
                needs
              </p>
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.9 }}
              animate={{ y: 60 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Button type="button" text="Contact Us" />
            </motion.div>
          </div>
        </div>
      </Hero>
    </LandingStyle>
  );
}

export default Landing;
