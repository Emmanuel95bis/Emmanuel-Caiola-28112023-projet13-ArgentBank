export const findToken = () => {
  const token = localStorage.getItem("jwt");
  if (token) {
    console.log("Tokennnnnnn", token);
    return token;
  } else {
    return "";
  }
};

export async function post(url, email, password) {
  try {
    console.log("fetch11111111111" + email + password);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("API22222222222", data);
      console.log("API22222222222", data.body);
      console.log("API22222222222", data.body.token);
      return data;
    } else {
      console.log("API33333333333");
      return data;
    }
  } catch (error) {
    console.error("Error in post request:", error);
    return { error };
  }
}
