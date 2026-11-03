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
        `size-6 md:size-auto inline-flex items-center justify-center md:justify-start md:px-2.25 md:py-1.5 rounded-md gap-1.25 [&_svg]:size-4 md:[&_svg]:size-5 border w-full md:h-fit aspect-square md:aspect-auto shrink-0 md:gap-1.25 outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 transition-default ${
          isActive
            ? "bg-blue-500/5 border-blue-500/10 text-blue-500 transition-none"
            : "bg-transparent hover:bg-neutral-700/30 border-transparent text-neutral-500 hover:text-neutral-50"
        } transition-default`
      }
    >
      {Icon && <Icon strokeWidth={1.5} />}
      <span className="text-sm/5 font-normal hidden md:inline-block">
        {label}
      </span>
      <span className="hidden md:inline-block ml-auto text-xs">{count}</span>
    </NavLink>
  );
};

export default SidebarNavItem;
