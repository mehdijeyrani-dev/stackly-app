import { useSidebarStore } from "@/stores";
import { useScrollbarGutter } from "@/hooks/useScrollbarGutter";
import SidebarHeader from "./SidebarHeader";
import SidebarAction from "./SidebarAction";
import SidebarOptions from "./SidebarOptions";
import SidebarNavigation from "./SidebarNavigation";
import SidebarInfo from "./SidebarInfo";

const Sidebar = () => {
  const { isOpen } = useSidebarStore();
  useScrollbarGutter();

  return (
    <aside
      className={`hidden absolute top-0 left-0 w-14 md:w-72 h-full bg-transparent p-2 sm:flex flex-col gap-1 md:gap-2 ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-default`}
    >
      <SidebarHeader />
      <SidebarAction />
      <SidebarNavigation />
      <SidebarOptions />
      <SidebarInfo />
    </aside>
  );
};

export default Sidebar;
