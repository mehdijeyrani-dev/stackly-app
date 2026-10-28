import { Sidebar } from "./sidebar";
import SidebarToggle from "./sidebar/SidebarToggle";
import Main from "./Main";
import {
  Calendar1,
  CalendarArrowUp,
  Heart,
  Inbox,
  Menu,
  Search,
} from "lucide-react";
import { NavLink } from "react-router";
import MobileBottomNav from "./MobileBottomNav";

const Dashboard = () => {
  return (
    <div className="relative flex gap-1 w-full h-dvh overflow-hidden">
      <SidebarToggle />
      <Sidebar />
      <Main />
      <MobileBottomNav />
    </div>
  );
};

export default Dashboard;
