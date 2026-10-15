import { Link } from "react-router";
import logoImage from "../../../public/logo.png";
import { useSidebarStore } from "@/stores";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

const SidebarHeader = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <div className="w-10 h-10 md:w-full md:h-12 bg-neutral-800 shrink-0 p-1 md:p-2 border border-neutral-700 rounded-md flex items-center justify-between">
      <Link to="/" className="w-full h-full flex items-center gap-2 shrink-0">
        <div className="w-full h-full md:w-8 md:h-8">
          <img src={logoImage} alt="" className="object-cover" />
        </div>
        <span className="hidden md:inline-block text-xl">Stackly.</span>
      </Link>
      <button
        onClick={toggleSidebar}
        className={`w-7 h-7 bg-transparent text-neutral-400 hover:bg-neutral-700 hover:text-neutral-50 shrink-0 flex items-center justify-center ${isOpen ? "ml-5 md:-ml-7" : "ml-7 md:ml-8"} transition-default rounded`}
      >
        {isOpen ? (
          <PanelLeftClose size={20} strokeWidth={1.5} />
        ) : (
          <PanelLeftOpen size={20} strokeWidth={1.5} />
        )}
      </button>
    </div>
  );
};

export default SidebarHeader;
