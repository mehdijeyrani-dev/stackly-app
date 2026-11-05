import { Header } from "@/components/common/layout/main";
import { useSidebarStore } from "@/stores";
import { Outlet } from "react-router";

const Main = () => {
  const { isOpen } = useSidebarStore();

  return (
    <section
      className={`flex-1 flex flex-col gap-1 md:gap-2 bg-background p-1 md:p-2 ${isOpen ? "ml-0 xs:ml-10 md:ml-64 xs:pl-0 md:pl-0" : "ml-0 xs:pl-1"} transition-default`}
    >
      <Header />
      <>
        <Outlet />
      </>
    </section>
  );
};

export default Main;
