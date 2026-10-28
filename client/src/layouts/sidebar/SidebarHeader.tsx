import SidebarLogo from "./SidebarLogo";
import { Link } from "react-router";

const SidebarHeader = () => {
  return (
    <Link
      to="/inbox"
      className="w-8 aspect-square md:aspect-auto md:w-full md:h-12 bg-surface border border-surface-border rounded-lg flex items-center justify-center md:justify-start gap-2 md:px-2"
    >
      <SidebarLogo />
    </Link>
  );
};

export default SidebarHeader;
