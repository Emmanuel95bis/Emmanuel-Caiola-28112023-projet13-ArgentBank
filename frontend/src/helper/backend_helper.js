import { postProfile, postToken, put } from "./api_helper";
import { LOGIN, UPDATE, PROFILE } from "./url_helper";
/*
//call API pour récupérer le token
export const postLogin = async (email, password) => {
  await postToken(LOGIN, email, password);
};*/

//call API pour récupérer le token et récupération de son profil
export const post = async (email, password) => {
  await postToken(LOGIN, email, password);
  return await postProfile(PROFILE, "", "");
};

//call API pour une mise à jour du profil
export const putProfile = async (firstName, LastName) => {
  return await put(UPDATE, firstName, LastName);
};
