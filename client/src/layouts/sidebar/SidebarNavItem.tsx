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
        `w-full md:h-fit aspect-square md:aspect-auto shrink-0 rounded-sm flex items-center justify-center md:justify-start md:gap-1.25 md:px-2.25 md:py-1.5 border outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 transition-default ${
          isActive
            ? "bg-blue-500/5 text-blue-500 border-blue-500/10 transition-none"
            : "bg-transparent hover:bg-neutral-700/30 border-transparent text-neutral-500 hover:text-neutral-50"
        }`
      }
    >
      {Icon && <Icon size={20} strokeWidth={1} className="shrink-0"/>}
      <span className="hidden md:inline-block leading-5">{label}</span>
      <span className="hidden md:inline-block text-[10px] ml-auto leading-5">{count}</span>
    </NavLink>
  );
};

export default SidebarNavItem;
