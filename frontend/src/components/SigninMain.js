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

  const ValidateUser = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const currentEmail = email;
    const currentPassword = password;

    console.log("Current Email:", currentEmail);
    console.log("Current Password:", currentPassword);

    // const response = dispatch(postLogin({ email, password }));

    //dispatch(fetchUser({ email, password }));
    console.log("Authentication successful");

    // Assuming navigation is done after the user state is updated
    navigate("/UserInformation");
  };
  /*
      .then((response) => {
        console.log("API response:", response);
        if (response && response.jwt) {
          console.log("Authentication successful");
          localStorage.setItem("jwt", response.jwt);
          navigate("/UserInformation");
        } else {
          console.log("Invalid API response format");
        }
      })
      .catch((err) => {
        console.error("Error during authentication:", err);
        // Handle errors, e.g., toastError('Incorrect credentials')
      });*/

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
