import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../styles/main.css";

import { fetchUser } from "../reducer/UsersReducer3";
import { useDispatch, useSelector } from "react-redux";

function SigninMain() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logstate, setLogstate] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginFlag = false;
  const user = useSelector((state) => state.user);
  useEffect(() => {
    setLogstate(user.logged);
  }, [user.logged]);

  const ValidateUser = async (e) => {
    e.preventDefault();
    await dispatch(fetchUser({ email, password }));
    // The Redux state will be updated asynchronously
    // No need to call Retour() immediately after dispatch
  };

  // Use the logstate value directly in the navigate call
  useEffect(() => {
    logstate ? navigate("/UserInformation") : navigate("/signin");
  }, [logstate, navigate]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {!loginFlag && <p>erreur du mot de passe ou login</p>}
        <form onSubmit={ValidateUser}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default SigninMain;
