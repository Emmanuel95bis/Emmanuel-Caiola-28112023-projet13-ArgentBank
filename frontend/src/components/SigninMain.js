import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import "../styles/main.css";

import { fetchUser } from "../reducer/UsersReducer3";
import { useDispatch, useSelector } from "react-redux";
import {
  setChecked,
  getChecked,
  setLogin,
  getJWT,
  getLogin,
} from "../authentification/Localstorage";

const handleClickCheckedBox = (checked, email) => {
  if (checked) {
    setChecked(checked);
    setLogin(email);
  } else {
    setChecked(checked);
    setLogin("");
  }
};

function SigninMain() {
  const checkbox = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logstate, setLogstate] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const storageEmail = getLogin();
  const storageChecked = getChecked();
  const storageToken = getJWT();
  let rememberMeFlag = false;

  if (storageToken !== "" && storageEmail !== "" && storageChecked === "true") {
    rememberMeFlag = true;
  }

  const user = useSelector((state) => state.user);
  useEffect(() => {
    setLogstate(user.logged);
  }, [user.logged]);

  //A validation du formulaire
  const ValidateUser = async (e) => {
    e.preventDefault();

    //call API pour validation login

    /*si le token est présent, le mail et remember me validé et password et email non modifié 
    le programme va chercher le profil et passe à la page account.
    sinon validation du login avant de récupérer le profil
    */
    if (rememberMeFlag === true && email === "" && password === "") {
      handleClickCheckedBox(checkbox.current.checked, storageEmail);
      await dispatch(fetchUser({ storageEmail, password: "REMEMBERME" }));
      navigate("/UserInformation");
    } else {
      await dispatch(fetchUser({ email, password }));
    }

    //affichage du message d'erreur
    setErrorMessage(true);
  };

  //si logstate est true, la validation est faite et on passe à la page de l'utilisateur
  //vérification de la case remember me et traitement en fonction de son état
  useEffect(() => {
    if (logstate) {
      handleClickCheckedBox(checkbox.current.checked, email);
      navigate("/UserInformation");
    } else {
      navigate("/signin");
    }
  }, [logstate, navigate, email, password]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {errorMessage ? (
          <p className="error_message">erreur du mot de passe ou login</p>
        ) : null}
        <form onSubmit={ValidateUser}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              placeholder={rememberMeFlag ? storageEmail : ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder={rememberMeFlag ? "********" : ""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              ref={checkbox}
              defaultChecked={storageChecked === "true"}
            />
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
