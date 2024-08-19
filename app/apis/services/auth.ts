import { callApi } from "@/app/apis";

const register = (form: any) => {
  return callApi("/auth/register", "post", form);
};

const login = (form: any) => {
  return callApi("/auth/login", "post", form);
};

export const auth = {
  register,
  login,
};
