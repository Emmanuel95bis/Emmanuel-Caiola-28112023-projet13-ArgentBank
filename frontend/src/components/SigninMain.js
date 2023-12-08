import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../styles/main.css";

import { fetchUser } from "../reducer/UsersReducer3";
import { useDispatch, useSelector } from "react-redux";

function SigninMain() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let loginFlag = true;
  const logging = useSelector((state) => state.user.logged);
  const ValidateUser = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      await dispatch(fetchUser({ email, password }));
      console.log("variable logging  " + logging);

      // Navigate conditionally based on login status

      logging ? navigate("/UserInformation") : navigate("/signin");
    } catch (error) {
      // Handle authentication error
      loginFlag = false;
    }
  };

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
