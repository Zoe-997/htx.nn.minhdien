import { create } from "zustand";
import { RepositoryRemote } from "@/app/apis/services";

interface AuthStore {
  loading: boolean;
  register: (
    form: any,
    onSuccess?: (data: any) => void,
    onFail?: (data: any) => void
  ) => void;
  login: (
    form: any,
    onSuccess?: (data: any) => void,
    onFail?: (data: any) => void
  ) => void;

  getAllUsers: (
    onSuccess?: (data: any) => void,
    onFail?: (data: any) => void
  ) => void;

  getUserById: (
    id: string,
    onSuccess?: (data: any) => void,
    onFail?: (data: any) => void
  ) => void;

  updateUser: (
    id: string,
    form: any,
    onSuccess?: (data: any) => void,
    onFail?: (data: any) => void
  ) => void;

  userDelete: (
    id: string,
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

  login: async (form, onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.auth.login(form);
      onSuccess?.(response?.data);
    } catch (error: any) {
      onFail?.(error?.response?.data);
    }
    set({ loading: false });
  },

  getAllUsers: async (onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.auth.getAllUsers();
      onSuccess?.(response?.data);
    } catch (error: any) {
      onFail?.(error?.response?.data);
    }
    set({ loading: false });
  },

  getUserById: async (id, onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.auth.getUserById(id);
      onSuccess?.(response?.data);
    } catch (error: any) {
      onFail?.(error?.response?.data);
    }
    set({ loading: false });
  },

  updateUser: async (id, form, onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.auth.updateUser(id, form);
      onSuccess?.(response?.data);
    } catch (error: any) {
      onFail?.(error?.response?.data);
    }
    set({ loading: false });
  },

  userDelete: async (id, onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.auth.userDelete(id);
      onSuccess?.(response?.data);
    } catch (error: any) {
      onFail?.(error?.response?.data);
    }
    set({ loading: false });
  },
}));
