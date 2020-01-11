import * as React from "react";
import { useState } from "react";

import "./header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div
          onClick={() => {
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
