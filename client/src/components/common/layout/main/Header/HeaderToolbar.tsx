import Divider from "@/components/ui/Divider";
import CurrentDate from "./CurrentDate";
import NotificationToggle from "./NotificationToggle";
import SearchBox from "./SearchBox";
import ThemeToggle from "./ThemeToggle";

const HeaderToolbar = () => {
  return (
    <div className="flex items-center gap-0.75 md:gap-1.25">
      <NotificationToggle />
      <ThemeToggle />
      <SearchBox />
      <Divider className="shrink-0 h-5 md:h-6" />
      <CurrentDate />
    </div>
  );
};

export default HeaderToolbar;
