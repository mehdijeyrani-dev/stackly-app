import { Sidebar } from "./sidebar";
import Main from "./Main";

const Dashboard = () => {
  return (
    <div className="relative flex w-full h-dvh overflow-hidden">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
