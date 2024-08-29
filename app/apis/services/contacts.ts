import { callApi } from "@/app/apis";

const getAllContact = (type?: string) => {
  return callApi(`/contacts?type=${type}`, "get");
};

export const contacts = {
  getAllContact,
};
