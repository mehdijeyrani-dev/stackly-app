import { useSidebarStore } from "@/stores";
import Button from "../ui/Button";
import { Bell, DoorOpen, Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/stores/themeStore";
import Divider from "../ui/Divider";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router";
import SidebarMenuButton from "@/layouts/sidebar/SidebarMenuButton";

interface HeaderProps {
  mobileSidebarContainer: HTMLDivElement | null;
}

const Header = ({ mobileSidebarContainer }: HeaderProps) => {
  const { isOpen } = useSidebarStore();
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const navigate = useNavigate();
  const notificationCount = 3;

  return (
    <header
      className={`h-10 md:h-12 w-full bg-surface border border-surface-border rounded-lg flex items-center justify-between px-1 ${isOpen ? "sm:pl-9.5 md:pl-2" : "sm:pl-9.5 md:pl-9.5"} transition-default shrink-0`}
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <SidebarMenuButton portalContainer={mobileSidebarContainer}/>
          <Button
            variant="outline"
            color="secondary"
            iconSize="md"
            onClick={() => navigate("/notifications")}
            className="rounded-md"
          >
            <Bell strokeWidth={1} />
            {notificationCount > 0 && (
              <span className="size-2 absolute top-1 right-1.5 bg-rose-500 rounded-full" />
            )}
          </Button>
          <Button
            variant="outline"
            color="secondary"
            iconSize="md"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md"
          >
            {theme === "dark" ? (
              <Sun strokeWidth={1} />
            ) : (
              <Moon strokeWidth={1} />
            )}
          </Button>
          <SearchBox />
        </div>
        <Divider className="hidden xs:block" />
        <p className="hidden xs:inline-flex items-center gap-1 bg-surface-secondary px-2 py-1.25 sm:h-7 md:h-8 rounded-md font-mono text-neutral-50 text-sm">
          <span className="">Aug 18,</span>
          <span className="">2027 - Sat</span>
        </p>
      </div>
      <Button
        variant="solid"
        color="danger"
        iconSize="md"
        className="md:w-fit md:px-1.5 md:py-1 rounded-md"
      >
        <DoorOpen size={20} strokeWidth={1} />
        <span className="hidden md:inline-block">Logout</span>
      </Button>
    </header>
  );
};

export default Header;
