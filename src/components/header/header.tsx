import * as React from "react";
import { useState } from "react";

const logo = require("../../images/logo.png");
import "./header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" />
        <div
          onClick={() => {
            document.body.style.overflowY = !open ? "hidden" : "scroll";
            setOpen(!open);
          }}
          className={`burger ${open ? "open" : ""}`}
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </header>
      {open ? <div className="overlay" /> : null}
    </>
  );
}

export default Header;
