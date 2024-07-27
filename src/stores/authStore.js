import { create } from "zustand";

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  token: null,
  uname: null,
  uemail: null,
  apiUrl: "http://localhost:8000",
  subscriberId: null,
  setName: (uname) => set({ uname }),
  setUEmail: (uemail) => set({ uemail }),
  login: (token) => set({ token, isLoggedIn: true }),
  logout: () => set({ token: null, isLoggedIn: false }),
  setSubscriberId: (subscriberId) => set({ subscriberId }),
}));

export default useAuthStore;
