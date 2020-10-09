import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useState } from "react";
import { motion } from "framer-motion";
const HeaderStyle = styled.header``;

const Logo = styled.img`
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
`;

const Blog = styled.div`
  margin-right: 8px;
  border-radius: 24px 13px 22px 36px;
  background: rgb(195 59 217);
  color: #fff;
  transition: all 0.5s;
  &:hover {
    background: #e1e1e1;
  }
  a {
    color: #fff;
  }
`;
const Policy = styled.div`
  background: #32eb91;
  border-radius: 24px 13px 22px 36px;
  color: #fff;
  transition: all 0.5s;

  &:hover {
    background: #e1e1e1;
  }
  a {
    color: #fff;
  }
`;
const Home = styled.div`
  background: #ff007f;
  margin-right: 8px;
  border-radius: 24px 13px 22px 36px;
  color: #fff;
  transition: all 0.5s;
  a {
    color: #fff;
  }
  &:hover {
    background: #e1e1e1;
  }
  &:hover {
    a {
      color: #fff;
    }
  }
`;
const HeaderLinks = styled.div`
  display: flex;
  position: absolute;
  top: 20px;
  right: 15px;
  transition: all 0.5s;
  padding-bottom: 5px;
  border-radius: 24px 13px 22px 36px;
  z-index: 1;
`;

interface Props {
  defaultUnderlineColor: string;
}

function Header(props: Props) {
  const [underline, setUnderline] = useState<string>(
    props.defaultUnderlineColor
  );
  return (
    <>
      <HeaderStyle>
        <Logo
          style={{ width: "100px" }}
          src={logo}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        <HeaderLinks style={{ borderBottom: `4px solid ${underline}` }}>
          <motion.div
            whileTap={{ scale: 0.8 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Home
              onMouseLeave={() => {
                setUnderline(props.defaultUnderlineColor);
              }}
            >
              <SharedLink to="/">Home</SharedLink>
            </Home>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.8 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Blog
              onMouseLeave={() => {
                setUnderline(props.defaultUnderlineColor);
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
              onMouseLeave={() => {
                setUnderline(props.defaultUnderlineColor);
              }}
            >
              <SharedLink to="/policy">Policy</SharedLink>
            </Policy>
          </motion.div>
        </HeaderLinks>
      </HeaderStyle>
    </>
  );
}

export default Header;
