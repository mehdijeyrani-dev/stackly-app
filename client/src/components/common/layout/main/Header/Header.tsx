import { useSidebarStore } from "@/stores";
import AccountMenu from "./AccountMenu";
import HeaderToolbar from "./HeaderToolbar";

const Header = () => {
  const { isOpen } = useSidebarStore();

  return (
    <header
      className={`hidden xs:block w-full h-fit xs:h-8 md:h-12 bg-surface border border-surface-border rounded-lg p-1 md:p-2 shrink-0 ${isOpen ? "xs:pl-7.5 md:p-2" : "xs:pl-7.5 md:pl-11"} transition-default`}
    >
      <div className="w-full h-full rounded-md flex items-center justify-between">
        <HeaderToolbar />
        <AccountMenu />
      </div>
    </header>
  );
};

export default Header;
