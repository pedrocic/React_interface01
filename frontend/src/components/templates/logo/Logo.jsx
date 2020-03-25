import React from "react";

import logo from "../../../assets/img/logo.png";

import { LogoArea } from "./logo_style";

export default () => (
  <LogoArea>
    <a href="/" className="logo">
      <img src={logo} alt="logo" />
    </a>
  </LogoArea>
);
