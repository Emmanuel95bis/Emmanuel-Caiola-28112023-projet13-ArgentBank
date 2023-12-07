import { setJWT, getJWT } from "../authentification/Localstorage";

const token = getJWT();
console.log("token first: " + token);

export async function put(url, firstName, lastName) {
  console.log("put11111111111", firstName, lastName, getJWT());
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("sortie du put", data.body);
      return data;
    } else {
      console.log("sortie du put", data);
      throw data;
    }
  } catch (error) {
    console.error("Error in put:", error);
    throw error;
  }
}

export async function postToken(url, email, password) {
  console.log("postToken", email, password, getJWT());
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data.body);
      setJWT(data.body.token);
      return data;
    } else {
      console.error(data);
      throw data;
    }
  } catch (error) {
    console.error("Error in post:", error);
    throw error;
  }
}

export async function postProfile(url, email, password) {
  console.log("postProfile", email, password, getJWT());
  const token = getJWT();
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      console.error(data);
      throw data;
    }
  } catch (error) {
    console.error("Error in post:", error);
    throw error;
  }
}
