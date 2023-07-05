import React from "react";
import "./social.styles.scss";
import { Link } from "react-router-dom";
const Social = () => {
  return (
    <div className="social-contaier">
      <Link
        className="link"
        to="https://www.instagram.com/enes___celik22/"
        target="_blank"
      >
        {" "}
        <i className="fa-brands fa-instagram"></i>
      </Link>
      <Link
        className="link"
        to="https://www.linkedin.com/feed/"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin"></i>
      </Link>
      <Link
        className="link"
        to="https://github.com/Exelances60"
        target="_blank"
      >
        <i className="fa-brands fa-github"></i>
      </Link>
      <Link
        className="link"
        to="https://twitter.com/Exelances505"
        target="_blank"
      >
        <i className="fa-brands fa-twitter"></i>
      </Link>
    </div>
  );
};

export default Social;
