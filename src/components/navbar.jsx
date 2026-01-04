import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="container nav">
        <div className="brand">
          <div className="logo" aria-hidden></div>
          <div>
            <div className="title">My Website</div>
            <div style={{ fontSize: "0.75rem", opacity: 0.9 }}>
              Sarlavha yoki tagline
            </div>
          </div>
        </div>

        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className="bar"
            style={{
              transform: open ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span className="bar" style={{ opacity: open ? 0 : 1 }} />
          <span
            className="bar"
            style={{
              transform: open ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>

        <nav className={"nav-links" + (open ? " open" : "")}>
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#services">
            Services
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
