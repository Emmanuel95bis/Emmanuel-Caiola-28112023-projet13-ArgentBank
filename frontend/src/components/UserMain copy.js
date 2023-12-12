import "../styles/main.css";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../reducer/UsersReducer3";

function UserMain() {
  const [firstname, setFirstname] = useState("Tonis");
  const [lastname, setLastname] = useState("Jarvis");
  const [isEditing, setIsEditing] = useState(false);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  //récupération changement du prénom et nom du state pour mettre à jour les hooks
  useEffect(() => {
    setFirstname(user.data.firstName);
    setLastname(user.data.lastName);
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
          <button className="save-button" onClick={changeName}>
            Save
          </button>{" "}
          <button className="save-button" onClick={changeHeader}>
            Cancel
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstname} {lastname}!
          </h1>
          <button className="edit-button" onClick={changeHeader}>
            Edit Name
          </button>
        </div>
      )}

      <h2 class="sr-only">Accounts</h2>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Checking (x8349)</h3>
          <p class="account-amount">$2,082.79</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Savings (x6712)</h3>
          <p class="account-amount">$10,928.42</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
          <p class="account-amount">$184.30</p>
          <p class="account-amount-description">Current Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default UserMain;
