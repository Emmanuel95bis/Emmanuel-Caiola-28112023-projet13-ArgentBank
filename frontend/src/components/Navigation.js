import { Link, useNavigate } from "react-router-dom";
import "../styles/main.css";
import argentBankLogo from "../asset/argentBankLogo.png";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { logout } from "../reducer/UsersReducer3";

function Navigation2(props) {
  let user = useSelector((state) => state.user);
  if (props.nav === "3") user = user.data.firstName;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstname] = useState(user);

  useEffect(() => {
    setFirstname(user);
  }, [user]);
  const direction = props.nav === "1" ? "/signin" : "/";

  const Logout = () => {
    dispatch(logout());
    return navigate("/");
  };

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
        <Link to={direction} onClick={Logout}>
          {props.nav === "1" ? "Sign In" : "Sign Out"}
        </Link>
      </div>
    </nav>
  );
}

export default Navigation2;
