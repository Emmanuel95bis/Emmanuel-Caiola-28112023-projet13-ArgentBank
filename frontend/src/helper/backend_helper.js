import { postProfile, postToken, put } from "./api_helper";
import { LOGIN, UPDATE, PROFILE } from "./url_helper";

export const postLogin = (email, password) => {
  return postToken(LOGIN, email, password);
};

export const post = async (email, password) => {
  await postToken(LOGIN, email, password);
  return await postProfile(PROFILE, "", "");
};

export const putProfile = (email, password, firstName, LastName) => {
  post(LOGIN, email, password);
  put(UPDATE, firstName, LastName);
};
