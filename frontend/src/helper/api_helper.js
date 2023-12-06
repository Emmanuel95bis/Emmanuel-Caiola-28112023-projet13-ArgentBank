import { setJWT, getJWT } from "../authentification/Localstorage";

const token = getJWT();
console.log("token first :" + token);

export async function put(url, firstName, lastName) {
  console.log("put11111111111" + firstName, lastName, getJWT());
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    })
      .then((response) => {
        response
          .json()
          .then((data) => {
            if (response.ok) {
              console.log("sortie du put" + data.body);

              resolve(data);
            } else {
              console.log("sortie du put");
              reject(data);
            }
          })
          .catch((err) => reject(err));
      })
      .catch((error) => reject(error));
  });
}

export async function post(url, email, password) {
  console.log("fetch11111111111" + email + password + getJWT());
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        response
          .json()
          .then((data) => {
            if (response.ok) {
              console.log(data.body);
              setJWT(data.body.token);
              resolve(data);
            } else {
              console.log(data);
              reject(data);
            }
          })
          .catch((err) => reject(err));
      })
      .catch((error) => reject(error));
  });
}
