import { useSidebarStore } from "@/stores";
import { useScrollbarGutter } from "@/hooks/useScrollbarGutter";
import SidebarHeader from "./SidebarHeader";
import SidebarAction from "./SidebarAction";
import SidebarOptions from "./SidebarOptions";
import SidebarNavigation from "./SidebarNavigation";

const Sidebar = () => {
  const { isOpen } = useSidebarStore();
  useScrollbarGutter();

  return (
    <aside
        className={`absolute top-0 left-0 hidden w-10 md:w-64 h-full bg-transparent shrink-0 p-1 pr-0 md:p-2 xs:flex flex-col gap-1 md:gap-2 ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-default`}
      >
        <SidebarHeader/>
        <SidebarAction />
        <SidebarNavigation />
        <SidebarOptions />
      </aside>
  );
};

export default Sidebar;
