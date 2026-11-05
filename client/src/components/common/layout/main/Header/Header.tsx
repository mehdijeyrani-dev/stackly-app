import { useSidebarStore } from "@/stores";
import AccountMenu from "./AccountMenu";
import HeaderToolbar from "./HeaderToolbar";
import SearchBox from "./SearchBox";
import Divider from "@/components/ui/Divider";

const Header = () => {
  const { isOpen } = useSidebarStore();

  return (
    <header
      className={`hidden xs:block w-full h-fit xs:h-8 md:h-12 bg-surface border border-surface-border rounded-lg p-1 md:p-2 shrink-0 ${isOpen ? "xs:pl-7.5 md:px-2" : "xs:pl-7.5 md:pl-11"} transition-default`}
    >
      <div className="w-full h-full rounded-md flex items-center justify-between">
        <HeaderToolbar />
        <div className="inline-flex items-center justify-end gap-1 grow">
          <SearchBox />
          <Divider className="shrink-0 h-5 md:h-6" />
          <AccountMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
