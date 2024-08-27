import { create } from "zustand";
import { RepositoryRemote } from "@/app/apis/services";

interface ProductsStore {
  loading: boolean;
  getAllProducts: (
    onSuccess?: (data: any) => void,
    onFail?: (data: any) => void
  ) => void;

  getProductById: (
    id: string,
    onSuccess?: (data: any) => void,
    onFail?: (data: any) => void
  ) => void;

  productRemove: (
    id: string,
    onSuccess?: (data: any) => void,
    onFail?: (data: any) => void
  ) => void;
}

export const useProductsStore = create<ProductsStore>((set) => ({
  loading: false,
  getAllProducts: async (onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.products.getAllProducts();
      onSuccess?.(response?.data);
    } catch (error) {
      onFail?.(error);
    }
    set({ loading: false });
  },

  getProductById: async (id, onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.products.getProductById(id);
      onSuccess?.(response?.data);
    } catch (error) {
      onFail?.(error);
    }
    set({ loading: false });
  },

  productRemove: async (id, onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.products.productRemove(id);
      onSuccess?.(response?.data);
    } catch (error) {
      onFail?.(error);
    }
    set({ loading: false });
  },
}));
