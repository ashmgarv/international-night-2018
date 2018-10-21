import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => (
  <div className="footer">
    <div className="social-icons">
      <div className="icon">
        <a target="_blank" href="https://www.facebook.com/ASUCIS/">
          <i class="fab fa-facebook fa-2x white-text mr-md-4"> </i>
        </a>
      </div>
      <div className="icon">
        <a target="_blank" href="https://www.instagram.com/asucis/">
          <i class="fab fa-instagram fa-2x white-text mr-md-4"> </i>
        </a>
      </div>
      <div className="icon">
        <a target="_blank" href="https://www.snapchat.com/add/asucis">
          <i class="fab fa-snapchat fa-2x white-text mr-md-4"> </i>
        </a>
      </div>
      <div className="icon">
        <a target="_blank" href="https://asucis.com/scripts/weixin.html">
          <i class="fab fa-weixin fa-2x white-text mr-md-4"> </i>
        </a>
      </div>
    </div>
    <span role="img" aria-label="copyright">
      ©️ 2018
    </span>
    <a
      className="link"
      href="https://asucis.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      ASUCIS,
    </a>
    <a
      className="link"
      href="https://dickwyn.xyz"
      target="_blank"
      rel="noopener noreferrer"
    >
      dickwyn.
    </a>
    &amp;
    <a
      className="link"
      href="https://waliaashm.github.io"
      target="_blank"
      rel="noopener noreferrer"
    >
      ashmwalia.
    </a>
    Proudly made in AZ
  </div>
);

export default Footer;
