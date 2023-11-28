import Home from "./pages/Home";
import Signin from "./pages/Signin";
import UserInformation from "./pages/UserInformation";
import Error from "./pages/Error404";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/UserInformation" element={<UserInformation />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
