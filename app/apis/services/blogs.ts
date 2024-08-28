import { callApi } from "@/app/apis";

const getAllBlogs = () => {
  return callApi("/blogs", "get");
};

export const blogs = {
  getAllBlogs,
};
