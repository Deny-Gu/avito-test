import { ILoginUser } from "../types/ILoginUser";
import { IRegisterUser } from "../types/IRegisterUser";

const URL = "http://localhost:3000";

export const loginUser = async (user: ILoginUser) => {
  try {
    const res = await fetch(URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const registerUser = async (user: IRegisterUser) => {
  try {
    const res = await fetch(URL + "/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const protectedUser = async () => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(URL + "/protected", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
