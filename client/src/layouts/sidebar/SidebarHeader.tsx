import SidebarLogo from "./SidebarLogo";
import SidebarToggle from "./SidebarToggle";

const SidebarHeader = () => {
  return (
    <div className="w-10 h-10 md:w-full md:h-12 bg-surface shrink-0 p-1 md:p-2 border border-surface-border rounded-lg flex items-center justify-between">
      <SidebarLogo />
      <SidebarToggle />
    </div>
  );
};

export default SidebarHeader;
