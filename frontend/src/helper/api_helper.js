const findToken = () => {
  const token = localStorage.getItem("jwt");
  if (token) {
    console.log("Tokennnnnnn", token);
    return token;
  } else {
    return "";
  }
};
findToken();

export async function post(url, email, password) {
  console.log("fetch11111111111" + email + password);
  return new Promise((resolve, reject) => {
    console.log("fetch11111111111" + email + password);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
              console.log("API22222222222", data.body.token);
              resolve(data);
            } else {
              console.log("API33333333333");
              reject(data);
            }
          })
          .catch((err) => reject(err));
      })
      .catch((error) => reject(error));
  });
}
