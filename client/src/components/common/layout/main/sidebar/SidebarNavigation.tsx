import {
  ChartSpline,
  Heart,
  CircleCheckBig,
  CalendarArrowUp,
  Calendar1,
  Inbox,
} from "lucide-react";
import SidebarNavItem from "./SidebarNavItem";

export interface NavigationItem {
  path: string;
  label: string;
  count?: string;
  icon?: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
}

const navItems: NavigationItem[] = [
  {
    path: "/inbox",
    label: "Inbox",
    icon: Inbox,
    count: "+15",
  },
  {
    path: "/today",
    label: "Today",
    icon: Calendar1,
    count: "4",
  },
  {
    path: "/upcoming",
    label: "Upcoming",
    icon: CalendarArrowUp,
    count: "10",
  },
  {
    path: "/completed",
    label: "Completed",
    icon: CircleCheckBig,
  },
  {
    path: "/favorites",
    label: "Favorites",
    icon: Heart,
  },
  { path: "/report", label: "Reporting", icon: ChartSpline },
];

const SidebarNavigation = () => {
  return (
    <nav className="w-8 md:w-full flex-1 bg-surface border border-surface-border rounded-lg overflow-y-auto p-1 md:p-2 inline-flex flex-col items-center md:items-stretch gap-1 scrollbar-none md:scrollbar-thin">
      {navItems.map((item) => (
        <SidebarNavItem key={item.path} item={item} />
      ))}
    </nav>
  );
};

export default SidebarNavigation;
