import { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import SinginMain from "../components/SigninMain";

import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../reducer/UsersReducer";

function Signin() {
  const user = useSelector((state) => state.user.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <Navigation></Navigation>
      <SinginMain></SinginMain>
      <Footer></Footer>;
    </>
  );
}

export default Signin;
