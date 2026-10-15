import { Sidebar } from "./sidebar";
import Main from "./Main";

const Dashboard = () => {
  return (
    <div className="w-full h-dvh overflow-hidden relative flex">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
