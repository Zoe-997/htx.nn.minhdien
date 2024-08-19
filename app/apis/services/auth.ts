import { callApi } from "@/app/apis";

const register = (form: any) => {
  return callApi("/auth/register", "post", form);
};

export const auth = {
  register,
};
