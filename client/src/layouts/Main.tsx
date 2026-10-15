import { useSidebarStore } from "@/stores";
import { Outlet } from "react-router";

const Main = () => {
  const { isOpen } = useSidebarStore();

  return (
    <div
      className={`flex-1 bg-neutral-100 dark:bg-neutral-900 py-2 pr-2 flex flex-col gap-2 ${isOpen ? "ml-2 sm:ml-14 md:ml-72 pl-0" : "ml-0 md:ml-0 px-2"} transition-default`}
    >
      <Outlet />
    </div>
  );
};

export default Main;
