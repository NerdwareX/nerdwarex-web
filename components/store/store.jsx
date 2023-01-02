import react from "react";
import create from "zustand";

export const useUserStore = create((set) => ({
  isUserLoggedIn: false,
  setIsUserLoggedIn: (modalChecker) =>
    set(() => ({ isModalOpen: modalChecker })),
}));
