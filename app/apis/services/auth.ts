import { callApi } from "@/app/apis";

const register = (form: any) => {
  return callApi("/auth/register", "post", form);
};

const login = (form: any) => {
  return callApi("/auth/login", "post", form);
};

const getAllUsers = () => {
  return callApi("/users/all", "get");
};

const getUserById = (id: string) => {
  return callApi(`/users/${id}`, "get");
};

const updateUser = (id: string, form: any) => {
  return callApi(`/users/${id}`, "patch", form);
};

const userDelete = (id: string) => {
  return callApi(`/users/${id}/delete`, "delete");
};

export const auth = {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  userDelete,
};
