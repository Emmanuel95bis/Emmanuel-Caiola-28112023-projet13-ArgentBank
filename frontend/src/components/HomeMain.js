import React from "react";
import "../styles/main.css";
import iconchat from "../asset/icon-chat.png";
import iconmoney from "../asset/icon-money.png";
import iconsecurity from "../asset/icon-security.png";

import { ArgumentHomepage } from "./ArgumentHomepage";

function HomeMain() {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>

      <section className="features">
        <h2 className="sr-only">Features</h2>
        <ArgumentHomepage
          icon={iconchat}
          h3text="You are our #1 priority"
          ptext="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
        />
        <ArgumentHomepage
          icon={iconmoney}
          h3text="More savings means higher rates"
          ptext="The more you save with us, the higher your interest rate will be!"
        />
        <ArgumentHomepage
          icon={iconsecurity}
          h3text="Security you can trust"
          ptext="We use top of the line encryption to make sure your data and money
          is always safe."
        />
      </section>
    </main>
  );
}

export default HomeMain;
