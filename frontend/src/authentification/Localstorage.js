export const setName = (firstname, lastname) => {
  localStorage.clear();
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
