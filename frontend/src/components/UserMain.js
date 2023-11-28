import "./main.css";
import React, { useState } from "react";

function UserMain() {
  const [isEditing, setIsEditing] = useState(false);

  const changeHeader = () => {
    setIsEditing(!isEditing);
  };

  return (
    <main class="main bg-dark">
      {isEditing ? (
        <div className="header-name">
          <h1>Welcome back </h1>
          <br />
          <input type="text" placeholder="Tony" className="name-input"></input>
          <input
            type="text"
            placeholder="Jarvis"
            className="name-input"
          ></input>
          <br />
          <button className="save-button">Save</button>{" "}
          <button className="save-button" onClick={changeHeader}>
            Cancel
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
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
