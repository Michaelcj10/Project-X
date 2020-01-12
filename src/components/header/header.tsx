import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const logo = require("../../images/logo.png");
import "./header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <motion.div
          animate={{ y: 5 }}
          transition={{ ease: "easeOut", duration: 0.9 }}
        >
          <img src={logo} alt="logo" />
        </motion.div>

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
