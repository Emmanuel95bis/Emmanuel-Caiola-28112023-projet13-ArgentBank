import { postProfile, postToken, put } from "./api_helper";
import { LOGIN, UPDATE, PROFILE } from "./url_helper";

export const postLogin = async (email, password) => {
  await postToken(LOGIN, email, password);
};

export const post = async (email, password) => {
  await postToken(LOGIN, email, password);
  return await postProfile(PROFILE, "", "");
};

export const putProfile = async (firstName, LastName) => {
  console.log("put111111111111" + firstName, LastName);
  //await postToken(LOGIN, email, password);
  return await put(UPDATE, firstName, LastName);
};
