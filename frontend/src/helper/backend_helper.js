import { post, put } from "./api_helper";
import { LOGIN, UPDATE, PROFILE } from "./url_helper";

export const postLogin = (email, password) => {
  post(LOGIN, email, password);
  return [postLogin];
};

export const postProfile = (email, password) => {
  const loginPromise = post(LOGIN, email, password);
  const profilePromise = post(PROFILE, "", "");

  // Assuming you want to wait for both promises to complete
  return Promise.all([loginPromise, profilePromise]);
};

export const putProfile = (email, password, firstName, LastName) => {
  post(LOGIN, email, password);
  put(UPDATE, firstName, LastName);
};
