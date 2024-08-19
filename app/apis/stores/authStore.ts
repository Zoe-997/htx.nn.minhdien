import { create } from "zustand";
import { RepositoryRemote } from "@/app/apis/services";

interface AuthStore {
  loading: boolean;
  register: (
    form: any,
    onSuccess?: (data: any) => void,
    onFail?: (data: any) => void
  ) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  loading: false,
  register: async (form, onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.auth.register(form);
      onSuccess?.(response);
    } catch (error) {
      onFail?.(error);
    }
    set({ loading: false });
  },
}));
