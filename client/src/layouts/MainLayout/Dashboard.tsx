import { Sidebar, SidebarToggle } from "@/components/common/layout/main";
import MobileTop from "./MobileTop";
import Main from "./Main";
import MobileBottomNav from "./MobileBottomNav";

const Dashboard = () => {
  return (
    <div className="relative w-full h-dvh overflow-hidden">
      <MobileTop/>
      <SidebarToggle />
      <Sidebar />
      <Main />
      <MobileBottomNav />
    </div>
  );
};

export default Dashboard;
