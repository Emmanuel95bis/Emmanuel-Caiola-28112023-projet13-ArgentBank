import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import argentBankLogo from "../asset/argentBankLogo.png";
import { getName } from "../authentification/Localstorage";
import { useDispatch } from "react-redux";

function Navigation2(props) {
  //recupération du prénom dans le localhost
  const recup_firstname = getName();
  const firstName = recup_firstname.recup_firstname;

  const direction = props.nav === "1" ? "/signin" : "/";

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
        {props.nav === "3" && <i className="fa fa-user-circle"></i>}
        {props.nav === "3" && firstName}

        <i class="fa fa-sign-out"></i>
        <Link to={direction}>{props.nav === "1" ? "Sign In" : "Sign Out"}</Link>
      </div>
    </nav>
  );
}

export default Navigation2;
