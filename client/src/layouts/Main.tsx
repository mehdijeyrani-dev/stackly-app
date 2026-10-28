import { useSidebarStore } from "@/stores";
import { Outlet } from "react-router";

const Main = () => {
  const { isOpen } = useSidebarStore();

  return (
    <section
      className={`flex-1 h-full bg-background p-1 ${isOpen ? "ml-0 xs:ml-10 md:ml-64 xs:pl-0 md:pl-1" : "ml-0 xs:pl-1"} transition-default`}
    >
      <header
        className={`w-full h-8 md:h-12 bg-surface border border-surface-border rounded-lg ${isOpen ? "" : ""}`}
      ></header>
      <>
        <Outlet />
      </>
    </section>
  );
};

export default Main;
