import { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import SinginMain from "../components/SigninMain";

import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../reducer/UsersReducer";

function Signin() {
  console.log("111111111111111111");
  const user = useSelector((state) => state.user.data);
  console.log("22222222222222222");
  console.log(user);

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
