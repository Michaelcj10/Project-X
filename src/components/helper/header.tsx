/** @jsx createElement */
import { createElement, useState } from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const HeaderStyle = styled.header`
  background: #1c2830;

  .burger {
    width: 60px;
    height: 60px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    cursor: pointer;
    right: 30px;
    z-index: 4;
    top: 25px;
  }

  @media (max-width: 768px) {
    .burger {
      display: flex;
    }
  }

  .stick {
    width: 60px;
    height: 5px;
    border-radius: 4px;
    margin-bottom: 15px;
    background-color: #2dfdb9;
    display: inline-block;
  }

  .stick:last-child {
    margin-bottom: 0px;
  }

  .stick-1.open {
    animation: stick-1-open 0.6s ease-out forwards;
  }

  .stick-2.open {
    animation: stick-2-open 0.6s linear forwards;
  }

  .stick-3.open {
    animation: stick-3-open 0.6s linear forwards;
  }

  @keyframes stick-1-open {
    0% {
      width: 60px;
    }
    40% {
      background-color: #19f9c8;
      width: 5px;
      transform: translate(40px, 0px);
    }
    80% {
      width: 5px;
      transform: translate(40px, -50px);
      animation-timing-function: cubic-bezier(0, 1, 1, 1);
    }
    100% {
      background-color: #19f9c8;
      width: 5px;
      transform: translate(6px, 21px);
    }
  }

  @keyframes stick-2-open {
    80% {
      background-color: #2dfdb9;
      transform: translate(0px, 0px) rotate(0deg);
    }
    100% {
      background-color: #19f9c8;
      transform: translate(5px, 0px) rotate(40deg);
    }
  }

  @keyframes stick-3-open {
    80% {
      background-color: #2dfdb9;
      transform: translate(0px, 0px) rotate(0deg);
    }
    100% {
      background-color: #19f9c8;
      transform: translate(5px, -20px) rotate(-39deg);
    }
  }

  .stick-1.close {
    width: 5px;
    transform: translate(27px, 26px);
    animation: stick-1-close 0.6s ease-out forwards;
  }

  .stick-2.close {
    transform: translate(0px, 0px) rotate(40deg);
    animation: stick-2-close 0.6s ease-out forwards;
  }

  .stick-3.close {
    transform: translate(0px, -23px) rotate(-40deg);
    animation: stick-3-close 0.6s ease-out forwards;
  }

  @keyframes stick-1-close {
    0%,
    70% {
      width: 0px;
    }
    100% {
      width: 60px;
      transform: translate(0, 0);
    }
  }

  @keyframes stick-2-close {
    0% {
      background-color: #19f9c8;
      width: 60px;
    }
    20% {
      background-color: #19f9c8;
      width: 5px;
      transform: translate(0, 0px) rotate(40deg);
    }
    40% {
      background-color: #2dfdb9;
      width: 0px;
    }
    65% {
      transform: translate(0, -70px);
      animation-timing-function: cubic-bezier(0, 1, 1, 1);
    }
    80% {
      width: 0px;
    }
    100% {
      width: 60px;
      transform: translate(0, 0px);
    }
  }

  @keyframes stick-3-close {
    0% {
      background-color: #19f9c8;
      width: 60px;
    }
    20% {
      background-color: #19f9c8;
      width: 5px;
      transform: translate(0, -23px) rotate(-40deg);
    }
    40% {
      background-color: #2dfdb9;
    }
    65% {
      transform: translate(0, -93px);
      animation-timing-function: cubic-bezier(0, 1, 1, 1);
    }
    90% {
      width: 5px;
    }
    100% {
      width: 60px;
      transform: translate(0, 0px);
    }
  }

  .open-menu {
    animation: menu-open 0.2s ease-out forwards;

    @keyframes menu-open {
      0% {
        width: 30%;
        height: 30%;
        top: 35%;
        left: 35%;
        border-radius: 50%;
      }

      100% {
        width: 100vw;
        height: 100%;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        overflow: visible;
      }
    }
  }
  .close-menu {
    animation: menu-close 0.25s ease-in forwards;

    @keyframes menu-close {
      0% {
        width: 100vw;
        height: 100%;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
      }
      100% {
        width: 0px;
        height: 0px;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }

  .fade-in {
    animation: fade-in 1s ease-in forwards;

    @keyframes fade-in {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }
  .fade-out {
    animation: fade-out 0.35s ease-in forwards;

    @keyframes fade-out {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;

const Logo = styled.img`
  width: 200px;
  transition: all 0.2s;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 4;
  @media (max-width: 765px) {
    width: 150px;
  }
`;

const MenuItem = styled.div`
  color: #fff;
  font-size: 35px;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: end;
`;
const Circle = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  margin-right: 5px;
  border-radius: 50%;
`;

const Menu = styled.div`
  width: 0vw;
  height: 0px;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 3;
  background: #030523;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  overflow: hidden;
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
  border-bottom: 3px solid #19f9c8;

  &:hover {
    border-bottom: 3px solid #19f9c8;

    a {
      color: #19f9c8;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [isPristine, setPristine] = useState<boolean>(true);

  document.documentElement.style.overflowY = open ? "hidden" : "visible";

  return (
    <HeaderStyle>
      <Logo src={logo} alt="logo" />
      <HeaderLinks>
        <NavLink>
          <SharedLink to="/">Site design</SharedLink>
        </NavLink>
        <NavLink>
          <SharedLink to="/blog">API design</SharedLink>
        </NavLink>
        <NavLink>
          <SharedLink to="/blog">Logo design</SharedLink>
        </NavLink>
      </HeaderLinks>
      <div
        className="burger"
        style={{ position: open ? "fixed" : "absolute" }}
        onClick={() => {
          setOpen(!open);
          setPristine(false);
        }}
      >
        <div
          className={`stick stick-1 ${
            isPristine ? "" : open ? "open" : "close"
          }`}
        />
        <div
          className={`stick stick-2 ${
            isPristine ? "" : open ? "open" : "close"
          }`}
        />
        <div
          className={`stick stick-3 ${
            isPristine ? "" : open ? "open" : "close"
          }`}
        />
      </div>

      <Menu className={open ? "open-menu" : isPristine ? "" : "close-menu"}>
        <div>
          <MenuItem className={open ? "fade-in" : isPristine ? "" : "fade-out"}>
            <Circle style={{ background: "#ffa91a" }} /> I need a site
          </MenuItem>
          <MenuItem className={open ? "fade-in" : isPristine ? "" : "fade-out"}>
            <Circle style={{ background: "#19f9c8" }} /> I need an API
          </MenuItem>
          <MenuItem className={open ? "fade-in" : isPristine ? "" : "fade-out"}>
            <Circle style={{ background: "#fff" }} /> I need a logo
          </MenuItem>
        </div>
      </Menu>
    </HeaderStyle>
  );
}

export default Header;
