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

/*
export async function get(url, config = {}) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        if (response.ok) {
                            resolve(data)
                        } else {
                            reject(data)
                        }
                    })
                    .catch((err) => reject(err))
            })
            .catch(error => reject(error))
    })
}
*/

export async function post(url, data) {
  console.log("fetch11111111111" + data);
  return new Promise((resolve, reject) => {
    console.log("fetch11111111111" + data);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "tony@stark.com",
        password: "password123",
      }),
    })
      .then((response) => {
        response
          .json()
          .then((data) => {
            if (response.ok) {
              console.log("API22222222222");
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
