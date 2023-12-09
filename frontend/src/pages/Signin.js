import { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import SinginMain from "../components/SigninMain";

import { useSelector } from "react-redux";

function Signin() {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log("changement", user);
  }, [user]);

  return (
    <>
      <Navigation nav="2"></Navigation>
      <SinginMain></SinginMain>
      <Footer></Footer>;
    </>
  );
}

export default Signin;
