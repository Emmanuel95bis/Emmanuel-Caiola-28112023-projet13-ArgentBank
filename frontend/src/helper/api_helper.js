import { setJWT, getJWT } from "../authentification/Localstorage";

export async function put(url, firstName, lastName) {
  const token = getJWT();

  console.log("token debut put", firstName, lastName, token);
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
    console.log("put3333333333333");
    const data = await response.json();

    if (response.ok) {
      console.log("sortie du put", data.body);
      return data;
    } else {
      console.log("sortie du put2", data);
      throw data;
    }
  } catch (error) {
    console.error("Error in put:", error);
    throw error;
  }
}

export async function postToken(url, email, password) {
  const token = getJWT();
  console.log("token debut recup token", email, password, getJWT());
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
      console.log("token sortie nouveau token" + data.body);
      setJWT(data.body.token);
      console.log("token sortie nouveau token localhost" + getJWT());
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
  console.log("token debut recup profile", email, password, getJWT());
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
