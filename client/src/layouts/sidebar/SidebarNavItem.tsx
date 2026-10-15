import { NavLink } from "react-router";
import type { NavigationItem } from "./SidebarNavigation";

interface SidebarNavItemProps {
  item: NavigationItem;
}

const SidebarNavItem = ({ item }: SidebarNavItemProps) => {
  const { path, label, count, icon: Icon } = item;

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `w-8 aspect-square md:aspect-auto md:w-full md:h-fit justify-center md:justify-start md:px-2 md:py-1 shrink-0 flex items-center gap-2 rounded-md transition-default ${
          isActive
            ? "bg-blue-900/20 text-blue-500"
            : "text-neutral-400 hover:bg-neutral-500/10"
        }`
      }
    >
      {Icon && <Icon size={20} strokeWidth={1} className="shrink-0" />}
      <span className="hidden md:inline-block md:text-base">{label}</span>
      <span className="ml-auto text-xs hidden md:inline-block">{count}</span>
    </NavLink>
  );
};

export default SidebarNavItem;
