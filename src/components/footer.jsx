import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer">
        <div className="footer-left">© 2023 My Website</div>

        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
