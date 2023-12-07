import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../styles/main.css";

import { fetchUser } from "../reducer/UsersReducer3";
import { useDispatch } from "react-redux";

function SigninMain() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  let loginFlag = true;

  const ValidateUser = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      //const response = await fetchUser(postLogin(email, password));
      await dispatch(fetchUser({ email, password }));
      //putProfile(email, password, "toto2", "titi2");
      console.log("Authentication successful");

      navigate("/UserInformation");
    } catch (error) {
      loginFlag = false;
      navigate("/signin");
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
