import { create } from "zustand";
import { useCookies } from "react-cookie";

const useAuthStore = create((set) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token", "uname", "uemail"]);

  return {
    isLoggedIn: false,
    token: null,
    uname: null,
    uemail: null,
    apiUrl: "https://moodspace-server.vercel.app",

    // Set username in Zustand state
    setName: (uname) => set({ uname }),

    // Set email in Zustand state
    setUEmail: (uemail) => set({ uemail }),

    // Login function - sets token and login state in Zustand and cookies
    login: (token, uname, uemail) => {
      set({ token, uname, uemail, isLoggedIn: true });
      
      // Use react-cookie to set cookies
      setCookie("token", token, { path: "/", secure: true, sameSite: "strict" });
      setCookie("uname", uname, { path: "/", secure: true, sameSite: "strict" });
      setCookie("uemail", uemail, { path: "/", secure: true, sameSite: "strict" });
    },

    // Logout function - clears token and login state, and removes cookies
    logout: () => {
      // Use react-cookie to remove cookies
      removeCookie("token", { path: "/" });
      removeCookie("uname", { path: "/" });
      removeCookie("uemail", { path: "/" });
      
      set({ token: null, uname: null, uemail: null, isLoggedIn: false });
    },
  };
});

export default useAuthStore;
