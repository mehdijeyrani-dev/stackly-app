import Header from "@/components/inbox/Header";
import { useSidebarStore } from "@/stores";
import { useState } from "react";
import { Outlet } from "react-router";

const Main = () => {
  const { isOpen } = useSidebarStore();
  const [mobileSidebarContainer, setMobileSidebarContainer] =
    useState<HTMLDivElement | null>(null);

  return (
    <div
      className={`flex-1 min-w-0 py-1 pr-1 flex flex-col ${isOpen ? "ml-1 sm:ml-12 md:ml-64 " : "ml-0 md:ml-0 px-1"} transition-default`}
    >
      <Header mobileSidebarContainer={mobileSidebarContainer} />
      <>
        <div
          ref={setMobileSidebarContainer}
          id="mobile-sidebar-container"
        ></div>
        <Outlet />
      </>
    </div>
  );
};

export default Main;
