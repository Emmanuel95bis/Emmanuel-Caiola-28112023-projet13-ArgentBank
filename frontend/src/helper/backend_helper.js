import { post } from "./api_helper";
import { LOGIN } from "./url_helper";

export const postLogin = (email, password) => post(LOGIN, email, password);
