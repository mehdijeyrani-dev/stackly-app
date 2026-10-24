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
        `w-8 aspect-square md:aspect-auto md:w-full md:h-fit justify-center md:justify-start gap-1.25 md:p-2 text-base/5 shrink-0 flex items-center rounded-sm focus-visible:outline-0 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-offset-background ${
          isActive
            ? "bg-blue-600/15 dark:bg-blue-900/20 text-blue-500 transition-none"
            : "text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-neutral-700/20"
        }`
      }
    >
      {Icon && <Icon size={20} strokeWidth={1} className="shrink-0 transition-none" />}
      <span className="hidden md:inline-block">{label}</span>
      <span className="ml-auto text-[10px] hidden md:inline-block">{count}</span>
    </NavLink>
  );
};

export default SidebarNavItem;
