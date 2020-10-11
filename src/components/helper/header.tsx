import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { motion } from "framer-motion";
const HeaderStyle = styled.header``;

const Logo = styled.img`
  margin-bottom: 25px;
  position: fixed;
  top: 25px;
  z-index: 99;
  border-radius: 50%;
  left: 25px;
  width: 100px;
  box-shadow: 0 6px 10px 0 rgba(21, 25, 68, 0.12),
    0 8px 16px -12px rgba(21, 25, 68, 0.05),
    0 4px 8px -3px rgba(21, 25, 68, 0.02);
  padding: 5px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 660px) {
    width: 65px;
  }
`;

const SharedLink = styled(Link)`
  cursor: pointer;
  transition: all 0.5s;
  border-radius: 40px 31px 48px 51px;
  font-size: 16px;
  padding: 8px;
  text-decoration: none;
  font-family: Roboto-Bold;

  a {
    color: #282c34;
    transition: all 0.5s;
  }
`;

const Blog = styled.div`
  a {
    color: #282c34;
  }
  border-bottom: 3px solid #282c34;

  &:hover {
    border-bottom: 3px solid #fff100;

    a {
      color: #fff100;
    }
  }
`;
const Policy = styled.div`
  a {
    color: #282c34;
  }

  border-bottom: 3px solid #282c34;

  &:hover {
    border-bottom: 3px solid #ec008b;

    a {
      color: #ec008b;
    }
  }
`;
const Home = styled.div`
  a {
    color: #282c34;
  }
  border-bottom: 3px solid #282c34;

  &:hover {
    border-bottom: 3px solid #a0fc69;

    a {
      color: #a0fc69;
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
  z-index: 1;
`;

function Header() {
  return (
    <>
      <HeaderStyle>
        <Logo
          src={logo}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        <HeaderLinks>
          <motion.div
            whileTap={{ scale: 0.8 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Home>
              <SharedLink to="/">Home</SharedLink>
            </Home>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.8 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Blog>
              <SharedLink to="/blog">Blog</SharedLink>
            </Blog>
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.8 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Policy>
              <SharedLink to="/policy">Policy</SharedLink>
            </Policy>
          </motion.div>
        </HeaderLinks>
      </HeaderStyle>
    </>
  );
}

export default Header;
