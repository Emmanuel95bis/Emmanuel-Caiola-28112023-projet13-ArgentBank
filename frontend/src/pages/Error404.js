import "../styles/Error.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <Navigation />
      <div className="error-message">
        <h1>404</h1>
        <span>"Oups! La page que vous demandez n'existe pas."</span>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
