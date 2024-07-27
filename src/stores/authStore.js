import { create } from "zustand";

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  token: null,
  uname: null,
  uemail: null,
  apiUrl: "https://moodspace-server.vercel.app",
  subscriberId: null,
  setName: (uname) => set({ uname }),
  setUEmail: (uemail) => set({ uemail }),
  login: (token) => set({ token, isLoggedIn: true }),
  logout: () => set({ token: null, isLoggedIn: false }),
  setSubscriberId: (subscriberId) => set({ subscriberId }),
}));

export default useAuthStore;
