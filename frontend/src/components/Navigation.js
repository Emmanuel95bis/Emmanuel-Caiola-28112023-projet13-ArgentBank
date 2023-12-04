import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import argentBankLogo from "../asset/argentBankLogo.png";

function Navigation2(props) {
  console.log(props.nav);
  const direction = props.nav === "1" ? "/signin" : "/";
  console.log(direction);

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
      <div className="nav-right">
        <i class="fa fa-user-circle"></i>
        {props.nav === "2" ? "Tony" : ""}

        <i class="fa fa-sign-out"></i>
        <Link to={direction}>
          {props.nav === "1"
            ? "Sign In"
            : props.nav === "2"
            ? "Sign Out"
            : "Sign Out"}
        </Link>
      </div>
    </nav>
  );
}

export default Navigation2;
