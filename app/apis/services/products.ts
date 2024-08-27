import { callApi } from "@/app/apis";

const getAllProducts = () => {
  return callApi("/products", "get");
};

const getProductById = (id: string) => {
  return callApi(`/products/${id}`, "get");
};

const productRemove = (id: string) => {
  return callApi(`/products/${id}`, "delete");
};

export const products = {
  getAllProducts,
  getProductById,
  productRemove,
};
