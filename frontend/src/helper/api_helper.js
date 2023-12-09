import { setJWT, getJWT } from "../authentification/Localstorage";

//mise  jour du nom et prénom dans le profile,
//nécessite dans le body nom, prénom  et dans le header le token
export async function put(url, firstName, lastName) {
  const token = getJWT();

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
      return data;
    } else {
      throw data;
    }
  } catch (error) {
    console.error("Error in put:", error);
    throw error;
  }
}

export async function postToken(url, email, password) {
  const token = getJWT();

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
