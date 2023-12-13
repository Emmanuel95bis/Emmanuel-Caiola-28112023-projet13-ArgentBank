export const setName = (firstname, lastname) => {
  localStorage.removeItem("FirstName");
  localStorage.removeItem("LastName");
  localStorage.setItem("FirstName", firstname);
  localStorage.setItem("LastName", lastname);
};

export const getName = () => {
  const firstname = localStorage.getItem("FirstName");
  const lastname = localStorage.getItem("LastName");
  return { recup_firstname: firstname, recup_lastname: lastname };
};

export const setJWT = (token) => {
  localStorage.removeItem("JWT");
  localStorage.setItem("JWT", token);
};

export const getJWT = () => {
  const token = localStorage.getItem("JWT");
  return token;
};

export const setChecked = (stateChecked) => {
  localStorage.removeItem("rememberMe");
  localStorage.setItem("rememberMe", stateChecked);
};

export const setLogin = (email) => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.setItem("email", email);
};

export const getChecked = () => {
  const RememberMe = localStorage.getItem("rememberMe");
  return RememberMe;
};

export const getLogin = () => {
  const email = localStorage.getItem("email");
  return email;
};
