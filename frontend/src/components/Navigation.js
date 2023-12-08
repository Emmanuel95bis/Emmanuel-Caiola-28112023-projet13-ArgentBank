import { Link } from "react-router-dom";
import "../styles/main.css";
import argentBankLogo from "../asset/argentBankLogo.png";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Navigation2(props) {
  const user = useSelector((state) => state.user.data.firstName);
  const [firstName, setFirstname] = useState(user);

  console.log("usermain" + user);

  useEffect(() => {
    setFirstname(user);
  }, [user]);

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
