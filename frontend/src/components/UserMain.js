import "../styles/main.css";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../reducer/UsersReducer3";

import { AccountSection } from "./AccountSection";
import { Button } from "./Button";

function UserMain() {
  const [initialFirstname, setInitialFirstname] = useState("Tonis");
  const [initialLastname, setInitialLastname] = useState("Jarvis");
  const [firstname, setFirstname] = useState("Tonis");
  const [lastname, setLastname] = useState("Jarvis");
  const [isEditing, setIsEditing] = useState(false);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  //récupération changement du prénom et nom du state pour mettre à jour les hooks
  useEffect(() => {
    setFirstname(user.data.firstName);
    setLastname(user.data.lastName);
    setInitialFirstname(user.data.firstName);
    setInitialLastname(user.data.lastName);
  }, [user.data.firstName, user.data.lastName]);

  const changeName = async () => {
    setIsEditing(!isEditing);

    try {
      await dispatch(
        updateProfile({ firstName: firstname, lastName: lastname })
      );
    } catch (error) {}
  };

  //inverser set editing pour changer de menu
  const changeHeader = () => {
    setIsEditing(!isEditing);
    setFirstname(initialFirstname);
    setLastname(initialLastname);
  };

  return (
    <main className="main bg-dark">
      {isEditing ? (
        <div className="header-name">
          <h1>Welcome back </h1>
          <br />
          <input
            type="text"
            placeholder={firstname}
            className="name-input"
            id="id_firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder={lastname}
            className="name-input"
            id="id_lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          ></input>
          <br />
          <Button title="Save" funct={changeName} />

          <Button title="Cancel" funct={changeHeader} />
        </div>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstname} {lastname}!
          </h1>
          <Button title="Edit Name" funct={changeHeader} />
        </div>
      )}

      <h2 className="sr-only">Accounts</h2>

      <AccountSection
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <AccountSection
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />

      <AccountSection
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}

export default UserMain;
