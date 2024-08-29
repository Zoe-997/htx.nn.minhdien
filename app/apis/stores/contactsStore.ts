import { create } from "zustand";
import { RepositoryRemote } from "@/app/apis/services";

interface ContactsStore {
  loading: boolean;
  getAllContact: (
    type?: string,
    onSuccess?: (data: any) => void,
    onFail?: (data: any) => void
  ) => void;
}

export const useContactsStore = create<ContactsStore>((set) => ({
  loading: false,
  getAllContact: async (type, onSuccess, onFail) => {
    try {
      set({ loading: true });
      const response = await RepositoryRemote.contacts.getAllContact(type);
      onSuccess?.(response?.data);
    } catch (error) {
      onFail?.(error);
    }
    set({ loading: false });
  },
}));
