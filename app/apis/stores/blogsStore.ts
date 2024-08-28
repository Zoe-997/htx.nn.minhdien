import { create } from "zustand";
import { RepositoryRemote } from "@/app/apis/services";

interface BlogsStore {
  loading: boolean;
  getAllBlogs: (
    onSuccess?: (data: any) => void,
    onFail?: (data: any) => void
  ) => void;
}

export const useBlogsStore = create<BlogsStore>((set) => ({
  loading: false,
  getAllBlogs: async (onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.blogs.getAllBlogs();
      onSuccess?.(response?.data);
    } catch (error) {
      onFail?.(error);
    }
    set({ loading: false });
  },
}));
