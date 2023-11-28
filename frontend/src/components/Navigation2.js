import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import argentBankLogo from "../asset/argentBankLogo.png";

function Navigation2() {
  return (
    <nav class="main-nav">
      <Link to="/">
        <a class="main-nav-logo" href="./index.html">
          <img
            class="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
      </Link>
      <div>
        <a class="main-nav-item" href="./user.html">
          <i class="fa fa-user-circle"></i>
          Tony
        </a>
        <Link to="/">
          <a class="main-nav-item" href="./index.html">
            <i class="fa fa-sign-out"></i>
            Sign Out
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation2;
