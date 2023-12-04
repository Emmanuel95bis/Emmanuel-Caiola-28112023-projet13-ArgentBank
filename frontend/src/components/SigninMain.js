import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../styles/main.css";

import { fetchUser } from "../reducer/UsersReducer2";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../helper/backend_helper";

function SigninMain() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    // Log the user variable inside the useEffect
    console.log("user variable inside useEffect:", user);
  }, [user]); // Add user as a dependency if needed

  const ValidateUser = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const currentEmail = email;
    const currentPassword = password;

    console.log("Current Email:", currentEmail);
    console.log("Current Password:", currentPassword);
    try {
      const response = await fetchUser(postLogin(email, password));

      console.log(response);
      console.log("Authentication successful");

      navigate("/UserInformation");
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
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
