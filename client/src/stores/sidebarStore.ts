import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ISidebarStore {
  isOpen: boolean;
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useSidebarStore = create<ISidebarStore>()(
  persist(
    (set) => ({
      isOpen: true,

      toggleSidebar: () =>
        set((state) => ({
          isOpen: !state.isOpen,
        })),

      openSidebar: () => set({ isOpen: true }),

      closeSidebar: () => set({ isOpen: false }),
    }),
    {
      name: "Sidebar-visibility",
    },
  ),
);
