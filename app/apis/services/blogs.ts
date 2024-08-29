import { callApi } from "@/app/apis";

const getAllBlogs = (query?: string) => {
  return callApi(`/blogs?${query}`, "get");
};

export const blogs = {
  getAllBlogs,
};
