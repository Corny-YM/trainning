import axios from "axios";

// LOGIN
export const loginCall = async (userInput: any, dispatch: any) => {
  // login
  try {
    // access_token, expires_in, user
    const { data } = await axios.post("/api/auth/login", {
      email: userInput.email,
      password: userInput.password,
    });

    // Local Storage
    const token = data.result.access_token;
    const expires_in = data.result.expires_in;
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("expires_in", JSON.stringify(expires_in));

    // Auth
    const user = data.result.user;
    console.log(user);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: user,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOGIN_FAILURE" });
  }
};

// AUTH
export const getCurrentUser = async () => {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  if (token) {
    try {
      const { data } = await axios.get("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      return data.result;
    } catch (err) {
      console.log(err);
    }
  }
};

// ACCOUNTS
export const getAccounts = async () => {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  if (token) {
    try {
      const { data } = await axios.get("/api/account", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      return data.result.data;
    } catch (err) {
      console.log(err);
    }
  }
};

export const getAnAccount = async (id: string) => {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  if (token) {
    try {
      const { data } = await axios.get(`/api/account/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      return data.result;
    } catch (err) {
      console.log(err);
    }
  }
};

export const createAccount = async (data: any) => {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  if (token) {
    try {
      await axios.post(
        `/api/account/`,
        {
          email: data.email,
          name: data.name,
          phone: data.phone,
          role: data.role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      return data.result;
    } catch (err) {
      console.log(err);
    }
  }
};

export const updateAccount = async (id: string, data: any) => {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  if (token) {
    try {
      await axios.put(
        `/api/account/${id}`,
        {
          name: data.name,
          phone: data.phone,
          role: data.role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
};

export const deleteAccount = async (id: any) => {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  if (token) {
    try {
      await axios.delete(`/api/account/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
};
