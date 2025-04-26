"use client";

import { create } from "zustand";

interface IDrawerSotre {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  dataDrawer?: {
    type: "create" | "update" | "read" | "other";
    title?: string;
    description?: string;
  };
  setDataDrawer: (data: IDrawerSotre["dataDrawer"]) => void;
}

export const useDrawerStore = create<IDrawerSotre>((set) => ({
  isOpen: false,
  openDrawer: () => set({ isOpen: true }),
  closeDrawer: () => set({ isOpen: false }),
  toggleDrawer: () => set((prevState) => ({ isOpen: !prevState.isOpen })),
  setDataDrawer: (data) => set({ dataDrawer: data }),
}));
