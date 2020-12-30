/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.header`
  background: #1c2830;
`;

const SharedLink = styled(Link)`
  cursor: pointer;
  transition: all 0.5s;
  border-radius: 40px 31px 48px 51px;
  font-size: 16px;
  padding: 8px;
  text-decoration: none;
  font-family: Mabry-Bold;

  a {
    transition: all 0.5s;
  }
`;

const NavLink = styled.div`
  a {
    color: #fff;
  }
  border-bottom: 3px solid #fff;

  &:hover {
    border-bottom: 3px solid #ffa91a;

    a {
      color: #ffa91a;
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
    <HeaderStyle>
      <HeaderLinks>
        <NavLink>
          <SharedLink to="/">Home</SharedLink>
        </NavLink>
        <NavLink>
          <SharedLink to="/blog">Blog</SharedLink>
        </NavLink>
      </HeaderLinks>
    </HeaderStyle>
  );
}

export default Header;
