import api from "./api";

export const registerUser = (data) =>
  api.post("/auth/register", data);

export const loginUser = (data) =>
  api.post("/auth/login", data);

export const logoutUser = () =>
  api.post("/auth/logout");

export const getUserData = () =>
  api.get("/auth/getUserData"); 

export const updateUser = (data) =>
  api.put("/auth/update", data);

export const deleteUser = (password) => {
    api.delete("/auth/delete", {
      data: {password}
    })
}


